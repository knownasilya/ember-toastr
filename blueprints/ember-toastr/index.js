module.exports = {
  description: 'Install toastr.js from npm',

  // prevent complaining
  normalizeEntityName: function() {
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    return this.addPackageToProject('toastr');
  }
};
