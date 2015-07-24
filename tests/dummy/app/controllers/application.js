import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    info(val) {
      this.notify.info(val);
    },
    success(val) {
      this.notify.success(val);
    },
    warning(val) {
      this.notify.warning(val);
    },
    error(val) {
      this.notify.error(val);
    }
  }
});
