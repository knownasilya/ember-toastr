import { initialize } from 'ember-toastr/initializers/toastr';
import ENV from '../config/environment';

const toastrOptions = {
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
const config = ENV['ember-toastr'] || {
  injectAs: 'notify',
  toastrOptions: toastrOptions
};

export default {
  name: 'ember-toastr',
  initialize(container, application) {
    if (!config.toastrOptions) {
      config.toastrOptions = toastrOptions;
    }

    if (!config.injectAs) {
      config.injectAs = 'notify';
    }

    initialize(container, application, config);
  }
};
