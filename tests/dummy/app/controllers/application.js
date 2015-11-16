import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    info(val) {
      this.toast.info(val, val, { progressBar: false });
    },
    success(val) {
      this.toast.success(val);
    },
    warning(val) {
      this.toast.warning(val);
    },
    error(val) {
      this.toast.error(val);
    }
  }
});
