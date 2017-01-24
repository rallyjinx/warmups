exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cats').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('cats').insert({
                    id: 1,
                    type: 'lion',
                    rating: 10,
                    grumpy: true,
                    weight_class: 'L'
                }, {
                    id: 2,
                    type: 'persian',
                    rating: 3,
                    grumpy: true,
                    weight_class: 'S'
                }, {
                    id: 3,
                    type: 'ocelot',
                    rating: 1,
                    grumpy: true,
                    weight_class: 'M'
                }, {
                    id: 4,
                    type: 'cheetah',
                    rating: 7,
                    grumpy: true,
                    weight_class: 'M'
                }, {
                    id: 5,
                    type: 'tiger',
                    rating: 10,
                    grumpy: false,
                    weight_class: 'L'
                }),
            ]);
        });
};
