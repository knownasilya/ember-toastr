export function initialize(container, application, options) {
  var injectAs = options.injectAs;
  toastr.options = options.toastrOptions;

  application.register('notify:main', toastr, { instantiate: false, singleton: true });
  application.inject('route', injectAs, 'notify:main');
  application.inject('controller', injectAs, 'notify:main');
  application.inject('component', injectAs, 'notify:main');
}
