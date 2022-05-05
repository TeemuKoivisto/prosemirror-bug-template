# [prosemirror-bug-template](https://teemukoivisto.github.io/prosemirror-bug-template/)

Template to reproduce ProseMirror bugs in the simplest form possible.

Loads the basic `prosemirror-example-setup` with `prosemirror-dev-toolkit` as ES modules using `importmap` and `es-module-shims` since they are not yet supported outside of Chrome. Deploys the content inside `static` to Github pages following https://teemukoivisto.github.io/prosemirror-bug-template URL form.

## How to use

1. Click `Use this template` from Github UI
2. Give your bug reproduction an appropriate name
3. Git clone the created repo. Run `npm i` to install prettier if you so desire
4. Run search and replace to replace `teemukoivisto` with your username and `prosemirror-bug-template` with your repo
5. Change content inside `static/` as needed to make your bug repo
6. Run `npm run deploy:init` to deploy to Github pages (incase it doesn't exist in upstream). Use `npm run deploy` in subsequent runs

## How to run

You need Node.js >=16 installed.

1. Git clone & `npm i`
2. Run `npm start`
3. See the content at http://localhost:4040 (hit refresh to see changes)
4. Run `npm run deploy` to deploy current changes to Github pages
