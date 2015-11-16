export function initialize(application, options) {
  var injectAs = options.injectAs;
  window.toastr.options = options.toastrOptions;

  application.inject('route', injectAs, 'service:toast');
  application.inject('controller', injectAs, 'service:toast');
  application.inject('component', injectAs, 'service:toast');
}
