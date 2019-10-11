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
  toastrOptions: toastrOptions	
};

import Service from 'ember-toastr/services/toast';

export default Service.extend({
  defaultToastrOptions: toastrOptions,
  config: config
})
