import Ember from 'ember';
import { initialize } from 'ember-toastr/initializers/toastr';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | toastr', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.container && application.container.lookup ? application.container : application;
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
