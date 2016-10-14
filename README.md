# ionicStarter
ionic starter template w/browserify and modular component structure

-- also includes ionicPush

## Installation
```
npm install
```
Copy @ionic_bundle folder into node_modules

> This is a necessary step as we require(@ionic_bundle).
> This exposes the ionic.bundle.js file as a node module.

#### For Ionic Push
> Create an index.js file at ~/node_modulses/@ionic/
```
require('./cloud/dist/bundle/ionic.cloud');
module.exports = ionic.cloud;
```

> This exposes the ionic.cloud.js file as node module.

You will also need to update all relevant ID's. (App ID & Sender ID)
Follow the tutorial at [Ionic Push Docs](http://docs.ionic.io/services/push/ "Ionic Push Docs")

## Build steps
Uses Gulp for the build system with browserify.

You will find a multitude of gulp tasks. You can simply run:

```
gulp build:dev or gulp build:prod (minified files)
```

### SCSS structure
There is a gulp task that handles the import of all .scss files inside the /js folder. So you dont have to manually maintain in the main.scss file.
