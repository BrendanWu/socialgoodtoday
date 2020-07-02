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

    console.log(req.body)
   
    const { title,description, organization,goal,amountRaised, bannerImage,
    bannerVideo, slideshowImages} = req.body;

    try {

      charity = new Charity({
        title,
        description,
        organization,
        goal,
        amountRaised,
        bannerImage,
        bannerVideo,
        slideshowImages
      });

      const c = await charity.save();
      res.json({success: true, charity: c})

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/', async (req, res) => {
  const charities = await Charity.find()
  res.json({success:true, charities})
})
router.get('/:id', async (req, res) => {
  console.log(req.params)
  const charity = await Charity.findOne({_id: req.params.id})
  console.log(charity)
  res.json({success:true, charity})
})

module.exports = router;
