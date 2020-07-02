const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Donation = require('../models/Donation');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get(
  '/',
  async (req, res) => {

    try {

      const donations = await Donation.find({})
      res.json({success:true, donations})

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/:email', async(req, res)=> {
  try {
    console.log(req.params.id);
    const donations = await Donation.find({email: req.params.email})
    console.log(donations);
 
    res.json({success:true, donations})
  } catch (error) {
    res.status(500).send(JSON.stringify(error.message))
  }
})

router.get('/getById/:id', async(req, res)=> {
  try {
    console.log(req.params.id);
    const donations = await Donation.find({cid: req.params.id})
    console.log(donations);
 
    res.json({success:true, donations})
  } catch (error) {
    res.status(500).send(JSON.stringify(error.message))
  }
})

module.exports = router;
