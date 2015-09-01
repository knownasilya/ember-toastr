# ember-toastr

A wrapper for [toastr.js] by injecting it into routes, components, and controllers.

[![NPM](https://nodei.co/npm/ember-toastr.png?downloads=true&stars=true)](https://nodei.co/npm/ember-toastr/)  
[![Build Status](https://travis-ci.org/knownasilya/ember-toastr.svg)](https://travis-ci.org/knownasilya/ember-toastr)
[![Ember Observer Score](http://emberobserver.com/badges/ember-toastr.svg)](http://emberobserver.com/addons/ember-toastr)

## Usage

```sh
ember install ember-toastr
```

The toastr object is injected as `toast`, so it can be used as

```js
this.toast.info('Hello there!');
```

See the toastr.js [demo] for other possible uses.

## Configuration

These are the default options:

```js
ENV['ember-toastr'] = {
  injectAs: 'toast',
  toastrOptions: {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  }
};
```

All options in `toastrOptions` are direct options for toastr.js.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[toastr.js]: https://github.com/CodeSeven/toastr
[demo]: http://codeseven.github.io/toastr/demo.html
