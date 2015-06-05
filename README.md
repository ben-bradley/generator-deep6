# generator-deep6 [![Build Status](https://secure.travis-ci.org/ben-bradley/generator-deep6.png?branch=master)](https://travis-ci.org/ben-bradley/generator-deep6)

The Deep6 generator will build out a very basic & simple ES6 development environment.

## Directory structure

```
config/
dist/
src/
  index.js
  bar.js
gulpfile.js
index.js
package.json
readme.md
```

## Gulps

- `gulp` - builds current `src/` to `dist/`, watches/builds `src/*.js`, and nodemons `index.js`
- `gulp build` - builds current `src/` to `dist/` and exits
- `gulp watch` - builds current `src/` to `dist/` and watches/builds `src/*.js`
- `gulp nodemon` - nodemons `index.js`

The app comes with `config` by default so you can use `NODE_ENV=xxx` to set up your environment

## Workflow

The idea is that you work on code in the `src/` directory and when you save it, gulp will "compile" it from ES6 to ES5 and re-run your `index.js` automagically.

1 Start `gulp`
2 Edit & save code in `src/`
3 Observe changes to app (app restarts via nodemon)

If you'd prefer to execute your code manually:

1 Start `gulp watch`
2 Edit & save code in `src/`
3 Run your code `node ./index.js`
