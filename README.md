# Modular Next.js Boilerplate

### Features
- Static type checking with [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) integrated
- Unit Test using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)
- End-to-end (E2E) automated tests (thanks to [Cypress](https://www.cypress.io/))
- SEO metadata, JSON-LD and Open Graph tags with [Next SEO](https://www.npmjs.com/package/next-seo)
- Run Linter with [ESLint](https://eslint.org/) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (thanks to [Commitizen](https://commitizen-tools.github.io/commitizen/) and [Commitlint](https://commitlint.js.org/#/))
- Absolute Imports using @ prefix
- Tunnel to make your local development accessible online (thanks to [ngrok](https://ngrok.com/))
- Bundle analysis, to know which dependencies take the most space in your JS bundle
- Powerful asynchronous state management & data fetching tools (thanks to [React Query](https://tanstack.com/query/v4))
- Internationalisation (i18n) (thanks to [next-i18next](https://www.npmjs.com/package/next-i18next))
- Strong observability of the system (monitoring) and push-notification when things go wrong (thanks to [Sentry](https://sentry.io/))
- Fine-grained frontend analytics (thanks to [Mixpanel](https://mixpanel.com/))
- Control and personalize your app on the fly (thanks to [Firebase Remote Config](https://firebase.google.com/products/remote-config))


### Requirements

- Node.js 16+ and yarn

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/DhimasYulian/supernova.git my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Folder Structure

```shell
$PROJECT_ROOT
├── public
└── src
    ├── common                                        
    │   ├── components
    │   │   └── [ComponentName]
    │   │       ├── index.tsx
    │   │       └── index.module.scss
    │   ├── contexts
    │   │   └── [ContextName]Context.tsx
    │   ├── constants
    │   │   └── [constantName].ts
    │   ├── hooks
    │   │   ├── mutations
    │   │   │   └── use[MutationName]Mutation.tsx
    │   │   ├── queries
    │   │   │   └── use[QueryName]Query.tsx
    │   │   └── use[HookName].tsx
    │   ├── templates
    │   │   └── [TemplateName]
    │   │       ├── index.tsx
    │   │       └── index.module.scss
    │   ├── utils
    │   │   └── [utilsName].ts
    │   ├── types
    │   │   └── [typeName].ts
    │   ├── services
    │   │   └── [ServiceName].ts
    │   └── styles
    │       └── [styleName].scss
    ├── modules
    │   └── [module-name]
    │       ├── components
    │       │   └── [ComponentName]
    │       │       ├── index.tsx
    │       │       └── index.module.scss
    │       ├── contexts
    │       │   └── [ContextName]Context.tsx
    │       ├── constants
    │       │   └── [constantName].ts
    │       ├── hooks
    │       │   ├── mutations
    │       │   │   └── use[MutationName]Mutation.tsx
    │       │   ├── queries
    │       │   │   └── use[QueryName]Query.tsx
    │       │   └── use[HookName].tsx
    │       ├── templates
    │       │   └── [TemplateName]
    │       │       ├── index.tsx
    │       │       └── index.module.scss
    │       ├── utils
    │       │   └── [utilsName].ts
    │       ├── types
    │       │   └── [typeName].ts
    │       └── services
    │           └── [ServiceName].ts
    ├── pages
    │   ├── [api]
    │   │   └── [api-name]
    │   │       └── index.tsx
    │   ├── [page-name]
    │   │   ├── index.tsx
    │   │   └── index.module.scss
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── _error.tsx
    │   ├── 404.tsx
    │   └── index.tsx
    └── middleware.ts
```
