const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Donation = require('../../models/Donation');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  async (req, res) => {
   
    const { user, charity, amount, donationType } = req.body;

    try {

      donation = new Donation({
        user,
        charity,
        amount,
        donationType
      });

      await donation.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
