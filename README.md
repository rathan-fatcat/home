
# Next.js Starterpack-LFI
A starter kit for high-performance sites. Clone, deploy, and fully customize with a few clicks.

# Overview
This starter kit has been made on top of Redux Toolkit TypeScript Example from next js examples.\
\
This toolkit is a standardized way to write Redux logic (create actions and reducers, setup the store).
## Tech Stack

**Client:**&nbsp;React, Next.js, Redux, Redux Toolkit, Sass.\
**Code Quality Improvement:**&nbsp;Typescript, EsLint, Prettier.\
**Git hooks automation:**&nbsp;Husky

*Note: the user must install EsLint & Prettier extensions form vscode extension marketplace, for this to work properly.*

## Features

- Highly scalable project structure.
- Typescript, EsLint, Prettier preconfigured to enforce proper coding standards. (maintaining a consistent code style drastically improves the code readability and maintainability)
- Automatically formats and lints the code on commit with Husky.

## Installation

Install the dependencies with yarn

```bash
yarn
```
Note: use ``'yarn'`` insted of ``'npm'`` throughout the project.
## Run Locally
```bash
 yarn dev
```
    
## Environment Variables
Next.js comes with built-in support for environment variables, which allows you to do the following:

Use `.env.local` to load environment variables\
Expose environment variables to the browser by prefixing with `NEXT_PUBLIC_`.

[Read more](https://nextjs.org/docs/basic-features/environment-variables)


## Folder Structure
Selecting the right folder structure for your application is an important decision and will directly affect the maintainability, scalability, and ease of use when working with a team. Hence, making the correct choice is crucial.\
\
The below structure scales well and organizes files in its feature folder. The core concept is to have folders as per the features in the application which ensures that the screens, components, and business logic for that particular feature are all contained within a single folder.

```javascript
./src
    ./app
    |---- hooks.ts (any custom hooks)
    |---- store.ts (redux store setup)
    ./features
    |---./[featureName]
    |   |----./components (feature specific components)
    |   |    |---./Component1
    |   |    |   | |---index.tsx
    |   |    |   | |---index.module.scss
    |   |    |   |...
    |   |    |   ./Component4
    |   |    |   |  |---index.tsx
    |   |    |   |  |---index.module.scss
    |   |    |   |...
    |   |    |   ./Page (Page Dumb component)
    |   |    |     |---index.tsx
    |   |    |     |---index.module.scss
    |   |    ./redux (redux code)
    |   |      |---api.ts
    |   |      |---slice.ts
    |   |    index.tsx (Page Container component)
    |   ./layouts
    |   |--./components (layout specific components)
    |   |   |--./DefaultLayout (base layout of the site)
    |   |   |    |---index.tsx 
    |   |   |./Navbar
    |   |   |  |---index.tsx
    |   |   |  |---index.module.scss
    |   |   |  |...
    |   |   |  |...
    |   |   |--./Footer
    |   |   |    |---index.tsx
    |   |   |    |---index.module.scss
    |   |   |--...
    |   |---index.tsx (layout type & inteface)
    |
    ./pages (website pages & routes) (ref: next js pages)
    |  |---./api (ref: next api routes)
    |  |---_app.tsx (ref: nextjs _app.tsx)
    |  |--index.tsx (home page)
    |  |--404.tsx (404 page)
    | 
    ./styles
    |  |---app.global.scss (global style sheet)
    |  |---... other global styles
    |
    ./utils (any unilitys you want to keep like helpers, etc)
      |-apiClient.tsx (wrapper over fetch to make api requests)
      
```



## Contributing

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `code of conduct`.

