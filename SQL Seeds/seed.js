

'use strict';

exports.seed = (knex) => {
  return knex('concerts').del()
    .then(() => {
    return knex('concerts').insert([{
      id: 1,
      name: 'Capitol Hill Block Party 2016',
      price: 49.99
      }, {
      id: 2,
      name: 'Bumbershoot 2016',
      price: 64.99
      }]);
    });
};

exports.seed = (knex) => {
  return knex('attendees').del()
    .then(() => {
      return knex('attendees').insert([{
        id: 1,
        concert_id: 1,
        name: 'Daniel Bailey',
        age: 52
      }, {
        id: 2,
        concert_id: 2,
        name: 'Heidi McGuire',
        age: 30
      }, {
        id: 3,
        concert_id: 3,
        name: 'Corey Reyes',
        age: 26
      }, {
        id: 4,
        concert_id: 4,
        name: 'Kristi Sheridan',
        age: 45
      }]);
    });
};
