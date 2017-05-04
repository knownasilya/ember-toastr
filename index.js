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
          production: vendor + '/toastr/toastr.min.js'
        }
    );

    target.import(
        {
          development: vendor + '/toastr/toastr.css',
          production: vendor + '/toastr/toastr.min.css'
        }
    );
  },

  treeForVendor: function(vendorTree){
    var trees = [];
    if(vendorTree){
      trees.push(vendorTree);
    }
    trees.push(new Funnel(toastrPath, {
      srcDir: 'build',
      include: ['toastr.js', 'toastr.css'],
      destDir: 'toastr',
    }));

    return new MergeTrees(trees);
  }
};
