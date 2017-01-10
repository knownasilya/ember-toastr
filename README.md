# ember-toastr

A service wrapper for [toastr.js] with auto injection into routes, components, and controllers.

[![npm version](https://badge.fury.io/js/ember-toastr.svg)](http://badge.fury.io/js/ember-toastr)
[![Build Status](https://travis-ci.org/knownasilya/ember-toastr.svg)](https://travis-ci.org/knownasilya/ember-toastr)
[![Ember Observer Score](http://emberobserver.com/badges/ember-toastr.svg)](http://emberobserver.com/addons/ember-toastr)

## Usage

```sh
ember install ember-toastr
```

The toastr service is injected as `toast` into controllers, routes, and components,
so it can be used like so:

```js
this.toast.info('Hello there!');
```
> :warning: Version 2.0 will probably remove the automatic injection into controllers and components in favor of service injection, and your own automatic injection.

If you want to access it anywhere else, please inject it

```js
toast: Ember.inject.service(),

test() {
  // don't forget to use `get`, since injections are computed properties
  var toast = this.get('toast');

  toast.info('text', 'title', options);
}
```

You can also use `toast.clear()` and `toast.remove()` to
remove all toasts. For example:

```hbs
<button onclick={{action toast.clear}}>Clear</button>
```

See the toastr.js [demo] for other possible uses, and the [toastr.js documentation]
for explanation of options.

## API

### `toast` Service

#### `success(msg = '', title = '', options = {})`

A method with the above default values for displaying a success toast.

#### `info(msg = '', title = '', options = {})`

A method with the above default values for displaying a info toast.

#### `warning(msg = '', title = '', options = {})`

A method with the above default values for displaying a warning toast.

#### `error(msg = '', title = '', options = {})`

A method with the above default values for displaying an error toast.

#### `clear()` or `clear(toast)`

A method to clear all toasts, or the individual toast.

#### `remove()` or `remove(toast)`

A method to remove all toasts, or the individual toast.

#### `toasts`

A property to access all toasts that are added.


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

## Publish Demo Site

```no-highlight
ember github-pages:commit --message <message>
git push
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[toastr.js]: https://github.com/CodeSeven/toastr
[toastr.js documentation]: https://github.com/CodeSeven/toastr#other-options
[demo]: http://codeseven.github.io/toastr/demo.html
