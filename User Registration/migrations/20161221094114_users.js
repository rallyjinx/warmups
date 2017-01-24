
exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username');
    table.specificType('digest', 'char(60)');
  });

exports.down = knex =>
  knex.schema.dropTable('users');
