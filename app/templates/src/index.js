let config = require('config'),
  q = require('q');

let foo = require('./foo');

let Promise = Promise || q.Promise;

let promise = () => {
  return Promise((resolve, reject) => {
    resolve(foo)
  })
}

promise()
  .then((foo) => {
    console.log(`bar = ${foo.bar}`);
    console.log(`baz = ${foo.baz}`);
  })
  .catch((err) => {
    console.log('uhoh...')
  })
