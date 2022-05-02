# [prosemirror-bug-template](https://teemukoivisto.github.io/prosemirror-bug-template/)

Template to reproduce bugs as a single HTML file. Loads the basic `prosemirror-example-setup` with `prosemirror-dev-toolkit` as ES modules using `importmap` and `es-module-shims` since they are not yet supported outside of Chrome. Deploys the `static` content to Github pages following https://teemukoivisto.github.io/prosemirror-bug-template URL form.

- Run `npm start` to the serve the files at http://localhost:4040/
- Run `npm run deploy` to deploy to Github pages