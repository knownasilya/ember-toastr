# ember-toastr

A service wrapper for [toastr.js] with auto injection into routes, components, and controllers.

[![npm version](https://badge.fury.io/js/ember-toastr.svg)](http://badge.fury.io/js/ember-toastr)
[![Build Status](https://travis-ci.org/knownasilya/ember-toastr.svg)](https://travis-ci.org/knownasilya/ember-toastr)
[![Ember Observer Score](http://emberobserver.com/badges/ember-toastr.svg)](http://emberobserver.com/addons/ember-toastr)

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above
- Requires jQuery (see https://github.com/emberjs/ember-jquery)

## Usage

```sh
ember install ember-toastr
```

You can now access the notifications service as `toast`.
You can inject it in routes, controllers or components using the following syntax:

```js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SomeController extends Controller {
  @service toast;

  @action
  test() {
    let title = 'Test';
    let message = 'A test happened';

    this.toast.info(message, title, {
      // options here
    });
  }
}
```

> If using newer versions of Ember you can inject using the decorator syntax, see the Ember documentation for @ember/service#inject decorator.

You can also use `toast.clear()` and `toast.remove()` to
remove all toasts. For example:

```hbs
<button {{on "click" this.toast.clear}}>Clear</button>
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
    hideMethod: 'fadeOut',
  },
};
```

All options in `toastrOptions` are direct options for toastr.js.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

[toastr.js]: https://github.com/CodeSeven/toastr
[toastr.js documentation]: https://github.com/CodeSeven/toastr#other-options
[demo]: http://codeseven.github.io/toastr/demo.html
