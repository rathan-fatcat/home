/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const flattenDeep = require('lodash/flattenDeep');
const prettier = require('prettier');
const { DOMAIN, renderSiteMap } = require('./sitemap-helpers');

const contains = (arr = [], str = '') => arr.some((s) => str.includes(s));

const routePriorityMap = {
  priorities: {
    '/': '1.0',
  },
  get: function (key = '') {
    const _key = '/' + key;
    return this.priorities[_key] || null;
  },
  getByRoute: function (route) {
    return this.priorities[route] || null;
  },
};

const routesToInclude = Object.keys(routePriorityMap.priorities);

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  console.warn('>> generating sitemap.xml and robots.txt');

  const { globbySync } = await import('globby');

  const pages = globbySync([
    'src/pages/**/*{.tsx,.mdx}',
    '!src/pages/_*.tsx',
    '!src/pages/api',
  ]);

  const routesToSkipForLater = [];

  const routeSiteMaps = pages
    .map((page) =>
      page
        .replace('src/pages', '')
        .replace('.tsx', '')
        .replace('.mdx', '')
        .replace('/index', '')
    )
    .filter((route) => {
      // Indlude route if it is not a dynamic route
      // and it is present in routes to include array
      // and is not present in skip for later routes
      return (
        routePriorityMap.getByRoute(route) &&
        route.indexOf('[') === -1 &&
        contains(routesToInclude, route) &&
        !contains(routesToSkipForLater, route)
      );
    })
    .map((route) => ({
      route,
      priority: routePriorityMap.getByRoute(route),
    }));

  const siteMapsArrays = await Promise.all([
    [{ route: '/', priority: routePriorityMap.get('') }], //home page
    routeSiteMaps,
  ]);

  const siteMaps = flattenDeep(siteMapsArrays);

  let robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\nDisallow: /`;

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${siteMaps
          .sort((o1, o2) => parseFloat(o2.priority) - parseFloat(o1.priority))
          .map(renderSiteMap)
          .join('')}
      </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
  fs.writeFileSync('public/robots.txt', robotsTxt);
})();
