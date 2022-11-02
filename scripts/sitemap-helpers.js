const DOMAIN = 'https://site-name.com';

const parseConfig = {
  '&': '&amp;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
};

const parseRoute = (url = '') => {
  let _url = url;
  for (let key in parseConfig) {
    _url = _url.replace(new RegExp(key), parseConfig[key]);
  }
  return _url;
};

function renderSiteMap({ route, priority }) {
  if (route && priority) {
    return `
    <url>
      <loc>${parseRoute(`${DOMAIN}${route}`)}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${priority}</priority>
    </url>`;
  }
  return '';
}

function fetchFromAPI(API_URL, onSuccess) {
  return new Promise((resolve, reject) => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (typeof onSuccess == 'function') resolve(onSuccess(response));
        else resolve('');
      })
      .catch((error) => {
        console.log(
          API_URL + ' api failed while generating sitemap.xml',
          error
        );
        return resolve('');
      });
  });
}

module.exports = {
  DOMAIN,
  renderSiteMap,
  fetchFromAPI
}