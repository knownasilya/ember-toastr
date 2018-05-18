import { run } from '@ember/runloop';
import Service from '@ember/service';
import { A as array } from '@ember/array';

let proxyGenerator = function(name) {
  return function(msg = '', title = '', options = {}) {
    let toasts = this.get('toasts');
    let toast;
    if (window && window.toastr) {
      toast = window.toastr[name](msg.toString(), title.toString(), options);

      if (toast) {
        toasts.pushObject(toast);
      }
    }

    return toast;
  };
};

export default Service.extend({
  success: proxyGenerator('success'),
  info: proxyGenerator('info'),
  warning: proxyGenerator('warning'),
  error: proxyGenerator('error'),

  init() {
    this._super(...arguments);
    this.toasts = array([]);

    // Auto remove toasts when hidden
    if (window && window.toastr) {
      window.toastr.options.onHidden = run.bind(this, () => {
        let toasts = this.get('toasts');
        let notVisible = toasts.filter(item => !item.is(':visible'));
        toasts.removeObjects(notVisible);
      });
    }
  },

  clear(toastElement) {
    if (window && window.toastr) {
      window.toastr.clear(toastElement);
      if (toastElement) {
        this.get('toasts').removeObject(toastElement);
      } else {
        this.set('toasts', array([]));
      }
    }
  },

  remove(toastElement) {
    if (toastElement) {
      this.get('toasts').removeObject(toastElement);
      toastElement.remove();
    } else {
      this.set('toasts', array([]));
    }
    if (window && window.toastr) {
      window.toastr.remove(toastElement);
    }
  },

  willDestroy() {
    this._super(...arguments);
    this.remove();
  }
});
