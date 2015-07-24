import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    notify() {
      this.notify.info('test');
    }
  }
});
