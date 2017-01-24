'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashedPassword) => {
      return knex('users')
        .insert({
          username: req.body.username,
          digest: hashedPassword
        }, '*');
    })
    .then((users) => {
    res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
