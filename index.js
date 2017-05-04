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

    target.import(
        {
          development: vendor + '/toastr/toastr.js',
          production: vendor + '/toastr/build/toastr.min.js'
        }
    );
    target.import(
        {
          development: vendor + '/toastr/build/toastr.css',
          production: vendor + '/toastr/build/toastr.min.css'
        }
    );
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
