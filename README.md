# generator-deep6 [![Build Status](https://secure.travis-ci.org/ben-bradley/generator-deep6.png?branch=master)](https://travis-ci.org/ben-bradley/generator-deep6)

The Deep6 generator will build out a very basic & simple ES6 development environment.

## Directory structure

```
config/
dist/
src/
  index.js
  bar.js
test/
  spec.js
gulpfile.js
index.js
package.json
readme.md
```

## Gulps

- `$ gulp` - Build, start, and monitor the service. Watch for changes in `src/` and trigger rebuild and restart. Service listens on port.
- `$ gulp develop` - Build and test the service. Watch for changes in `src/` and `test/` and trigger rebuild and retest.
- `$ gulp ci` - Watch `dist/` and retest on changes.
- `$ gulp build` - Only build the app.
- `$ gulp test` - Only test the app.
- `$ gulp nodemon` - Start the service. Watch for changes in `dist/` and restart service.

The app comes with `config` by default so you can use `NODE_ENV=xxx` to set up your environment

## Workflow

The idea is that you work on code in the `src/` directory and when you save it, gulp will "compile" it from ES6 to ES5 and re-run your `index.js` automagically.

To get the full TDD experience:

1. Start `$ gulp develop`
2. Edit & save code in `src/`
3. Observe your test results
4. If necessary, update your tests

For a non-TDD approach

1. Start `$ gulp`
2. Edit & save code in `src/`
3. Observe changes to app (app restarts via nodemon)

If you'd prefer to execute your code manually:

1. Start `$ gulp watch` (will detect changes in `src/` and rebuild)
2. Edit & save code in `src/`
3. Run your code `$ node ./index.js`
