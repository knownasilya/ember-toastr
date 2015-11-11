import Ember from 'ember';
import { initialize } from 'ember-toastr/initializers/toastr';
import { module, test } from 'qunit';

var registry, application;
var numbers = Ember.VERSION.split('-')[0].split('.');
var major = Number(numbers[0]);
var minor = Number(numbers[1]);

module('Unit | Initializer | toastr', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();

      if (major === 1 || (major === 2 && minor < 1)) {
        registry = application.registry;
      } else {
        registry = application.__container__;
      }

      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(application, {
    injectAs: 'test'
  });

  // you would normally confirm the results of the initializer here
  var toastr = registry.lookup('notify:main');
  assert.ok(typeof toastr.info === 'function');
});
