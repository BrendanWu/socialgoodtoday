const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Charity = require('../models/Charity');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  async (req, res) => {
   
    const { title,description, organization,goal,amountRaised} = req.body;

    try {

      charity = new Charity({
        title,
        description,
        organization,
        goal,
        amountRaised
      });

      await charity.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
