/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var path = require('path');

var toastrPath = path.dirname(require.resolve('toastr'));

module.exports = {
  name: 'ember-toastr',

  included: function(app, parentAddon) {
    var vendor = this.treePaths.vendor;
    var target = (parentAddon || app);

    if (target.app) {
      target = target.app;
    }

    target.import(vendor + '/toastr/toastr.js');
    target.import(vendor + '/toastr/build/toastr.css');
  },

  treeForVendor: function(vendorTree){
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
  }
};
