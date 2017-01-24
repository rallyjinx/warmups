exports.up = (knex) => {
    return knex.schema.createTable('cats', (table) => {
        table.increments();
        table.string('type');
        table.integer('rating');
        table.boolean('grumpy');
        table.string('weight_class');
        table.timestamps(true, true);
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('cats');
};
