'use strict';

var config = require('config'),
    q = require('q');

var foo = require('./foo');

var Promise = Promise || q.Promise;

var promise = function promise() {
  return Promise(function (resolve, reject) {
    resolve(foo);
  });
};

promise().then(function (foo) {
  console.log('bar = ' + foo.bar);
  console.log('baz = ' + foo.baz);
})['catch'](function (err) {
  console.log('uhoh...');
});
