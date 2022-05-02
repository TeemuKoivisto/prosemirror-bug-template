# [prosemirror-bug-template](https://teemukoivisto.github.io/prosemirror-bug-template/)

Template to reproduce ProseMirror bugs in the simplest form possible.

Loads the basic `prosemirror-example-setup` with `prosemirror-dev-toolkit` as ES modules using `importmap` and `es-module-shims` since they are not yet supported outside of Chrome. Deploys the `basic` content to Github pages following https://teemukoivisto.github.io/prosemirror-bug-template URL form. NOTE: incase `gh-pages` branch doesn't exist in remote, run `npm run deploy:init` to create one. Otherwise `npm run deploy` works.

## Commands

- Run `npm start` to serve the files at http://localhost:4040/ Run other folders with eg `node serve.js yjs`
- Run `npm run deploy` to deploy to Github pages