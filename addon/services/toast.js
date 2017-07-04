import Ember from 'ember';

const { run } = Ember;

let proxyGenerator = function (name) {
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

    // Auto remove toasts when hidden
    window.toastr.options.onHidden = run.bind(this, () => {
      let toasts = this.get('toasts');
      let notVisible = toasts.filter(item => !item.is(':visible'));
      toasts.removeObjects(notVisible);
    });
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
    if (toastElement) {
      this.get('toasts').removeObject(toastElement);
      toastElement.remove();
    } else {
      this.set('toasts', Ember.A([]));
    }
    window.toastr.remove(toastElement);
  },

  willDestroy() {
    this._super(...arguments);
    this.remove();
  }
});
