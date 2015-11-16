import Ember from 'ember';

var proxyGenerator = function(name){
  return function(msg = '', title = '', options = {}) {
    window.toastr[name](msg.toString(), title.toString(), options);
  };
};

export function initialize(application, options) {
  var injectAs = options.injectAs;

  window.toastr.options = options.toastrOptions;

  var proxiedToastr = Ember.Object.extend(toastr).create({
    success: proxyGenerator('success'),
    info: proxyGenerator('info'),
    warning: proxyGenerator('warning'),
    error: proxyGenerator('error')
  });

  application.register('notify:main', proxiedToastr, { instantiate: false, singleton: true });
  application.inject('route', injectAs, 'notify:main');
  application.inject('controller', injectAs, 'notify:main');
  application.inject('component', injectAs, 'notify:main');
  application.inject('service', injectAs, 'notify:main');
}
