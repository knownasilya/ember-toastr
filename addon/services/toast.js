import Ember from 'ember';

var proxyGenerator = function (name) {
  return function (msg = '', title = '', options = {}) {
    window.toastr[name](msg.toString(), title.toString(), options);
  };
};

export default Ember.Service.extend({
  success: proxyGenerator('success'),
  info: proxyGenerator('info'),
  warning: proxyGenerator('warning'),
  error: proxyGenerator('error')
});
