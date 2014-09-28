# kwest-mock [![Dependency Status][depstat-image]][depstat-url]

Provides mock [kwest-base](https://github.com/Janpot/kwest-base) object for plugin testing.

## Installation

    $ npm install --save-dev kwest-mock

## Use

Example with mocha
```js
var mock = require('kwest-mock');
var assert = require('chai').assert;

var request = mock(function(request, respond) {
  assert.strictEqual(request.getHeader('x-test'), 'success');
  return respond({
    headers: {
      'x-test': 'success'
    }
  });
});

describe('mock', function () {
  it('should work', function (done) {
    request('http://www.example.com').then(function (response) {
      assert.strictEqual(response.getHeader('x-test'), 'success');
      done();
    })
    .catch(done);
  });
});

```



[depstat-url]: https://david-dm.org/Janpot/kwest-mock
[depstat-image]: http://img.shields.io/david/Janpot/kwest-mock.svg?style=flat
