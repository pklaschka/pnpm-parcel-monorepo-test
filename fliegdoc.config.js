// fliegdoc.config.js
const { HTMLTheme } = require('fliegdoc');

module.exports = {
    baseUrl: '/',
    outDir: './docs',
    readme: './README.md',
    modules: [
        {
            package: './packages/a/package.json',
            tsconfig: './packages/a/tsconfig.json',
            mainFile: 'index.ts'
        },
        {
            package: './packages/b/package.json',
            tsconfig: './packages/b/tsconfig.json',
            mainFile: 'index.ts'
        }
    ],
    title: 'pnpm & parcel Monorepo Test', // appears in the page title and header
    externalLinks: {
        "GitHub": "https://github.com/pklaschka/pnpm-parcel-monorepo-test"
    }, // e.g.: { "GitHub": "https://github.com/fliegwerk/fliegdoc" }
    hidePrivateMembers: true,
    theme: HTMLTheme
};
