import Controller from '@ember/controller';

export default Controller.extend({
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
    },
    removeItem(item) {
      this.get('toast').remove(item);
    },
    clearItem(item) {
      this.get('toast').clear(item);
    },
    removeAll() {
      this.toast.remove();
    },
    clearAll() {
      this.toast.clear();
    }
  }
});
