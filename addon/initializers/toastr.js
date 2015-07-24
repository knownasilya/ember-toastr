export function initialize(container, application) {
  toastr.options = {
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
  };

  application.register('notify:main', toastr, { instantiate: false, singleton: true });
  application.inject('route', 'notify', 'notify:main');
  application.inject('controller', 'notify', 'notify:main');
  application.inject('component', 'notify', 'notify:main');
}

export default {
  name: 'ember-toastr',
  initialize: initialize
};
