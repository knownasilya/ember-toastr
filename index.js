'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: require('./package').name,

  included: function () {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/toastr/toastr.js');
    this.import('vendor/toastr/build/toastr.css');
  },

  treeForVendor: function (vendorTree) {
    let toastrPath = path.dirname(require.resolve('toastr'));
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    let toastrTree = new Funnel(toastrPath, {
      include: ['toastr.js', 'build/toastr.*'],
      destDir: 'toastr',
    });

    trees.push(toastrTree);

    return new MergeTrees(trees, { overwrite: true });
  },

  _ensureThisImport: function () {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  },
};
