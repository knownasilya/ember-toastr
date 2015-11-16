import { moduleFor, test } from 'ember-qunit';

moduleFor('service:toast', 'Unit | Service | toast', {
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);

  assert.ok(typeof service.info === 'function');
  assert.ok(typeof service.success === 'function');
  assert.ok(typeof service.warning === 'function');
  assert.ok(typeof service.error === 'function');
});
