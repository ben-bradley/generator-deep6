'use strict';

import foo from './foo';

let promise = () => {
  return new Promise((resolve, reject) => {
    resolve(foo);
  });
};

promise()
  .then((foo) => {
    console.log(`bar = ${foo.bar}`);
    console.log(`baz = ${foo.baz}`);
  })
  .catch((err) => {
    throw new Error(err);
  });
