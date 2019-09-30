import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | toast', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:toast');
    assert.ok(service);

    assert.ok(typeof service.info === 'function');
    assert.ok(typeof service.success === 'function');
    assert.ok(typeof service.warning === 'function');
    assert.ok(typeof service.error === 'function');
  });
});
