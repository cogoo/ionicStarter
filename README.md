# ionicStarter
ionic starter template w/browserify and modular component structure

## Installation
```
npm install
```
Copy @ionic_bundle folder into node_modules

> This is a necessary step as we require(@ionic_bundle).
> This exposes the ionic.bundle.js file as a node module.

## Build steps
Uses Gulp for the build system with browserify.

You will find a multitude of gulp tasks. You can simply run:

```
gulp build:dev or gulp build:prod (minified files)
```

### SCSS structure
There is a gulp task that handles the import of all .scss files inside the /js folder. So you dont have to manually maintain in the main.scss file.
