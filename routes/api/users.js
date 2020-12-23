'use strict';

const router = require('express').Router();
const { Router } = require('express');
const users = require('../../controllers/users');

// routes match: /api/users/...
router.route('/login')
  .post(users.login);

router.route('/register')
  .post(users.register);

router.route('/username/:username')
  .get((users.findByUsername));

module.exports = router;