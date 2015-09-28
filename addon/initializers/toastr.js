import Ember from 'ember';

export function initialize(container, application, options) {
  var injectAs = options.injectAs;
  window.toastr.options = options.toastrOptions;

  application.register('notify:main', Object.assign({}, toastr, Ember.Object.create({
    success(msg) {
      window.toastr.success(msg.toString());
    },
    info(msg) {
      window.toastr.info(msg.toString());
    },
    warning(msg) {
      window.toastr.warning(msg.toString());
    },
    error(msg) {
      window.toastr.error(msg.toString());
    }
  })), { instantiate: false, singleton: true });
  application.inject('route', injectAs, 'notify:main');
  application.inject('controller', injectAs, 'notify:main');
  application.inject('component', injectAs, 'notify:main');
}
