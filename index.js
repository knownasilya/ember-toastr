'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;
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

    let toastrJsTree = new Funnel(toastrPath, {
      include: ['toastr.js'],
      destDir: 'toastr',
    });
    let toastrCssTree = new Funnel(toastrPath, {
      include: ['build/toastr.css'],
      destDir: 'toastr',
    });

    // protect against usage in node since it depends on jquery
    toastrJsTree = map(
      toastrJsTree,
      (content) => `if (typeof FastBoot === 'undefined') { ${content} }`
    );

    trees.push(toastrCssTree);
    trees.push(toastrJsTree);

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
