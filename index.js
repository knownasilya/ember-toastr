'use strict';

var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: require('./package').name,

  included: function() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/toastr/toastr.js');
    this.import('vendor/toastr/build/toastr.css');
  },

  treeForVendor: function(vendorTree){
    var toastrPath = path.dirname(require.resolve('toastr'));

    var trees = [];
    if(vendorTree){
      trees.push(vendorTree);
    }

    var toastrTree = new Funnel(toastrPath, {
      include: ['toastr.js', 'build/toastr.*'],
      destDir: 'toastr',
    });

    trees.push(toastrTree);

    return new MergeTrees(trees, { overwrite: true });
  },

  _ensureThisImport: function() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        var app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};
