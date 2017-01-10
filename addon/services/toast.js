import Ember from 'ember';

var proxyGenerator = function (name) {
  return function (msg = '', title = '', options = {}) {
    let toasts = this.get('toasts');
    let toast = window.toastr[name](msg.toString(), title.toString(), options);

    if (toast) {
      toasts.pushObject(toast);
    }

    return toast;
  };
};

export default Ember.Service.extend({
  success: proxyGenerator('success'),
  info: proxyGenerator('info'),
  warning: proxyGenerator('warning'),
  error: proxyGenerator('error'),

  init() {
    this._super(...arguments);
    this.toasts = Ember.A([]);
  },

  clear(toastElement) {
    window.toastr.clear(toastElement);
    if (toastElement) {
      this.get('toasts').removeObject(toastElement);
    } else {
      this.set('toasts', Ember.A([]));
    }
  },

  remove(toastElement) {
    window.toastr.remove(toastElement);
    if (toastElement) {
      this.get('toasts').removeObject(toastElement);
    } else {
      this.set('toasts', Ember.A([]));
    }
  }
});
