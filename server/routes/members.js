const express = require('express');
const router = express.Router();
const Member = require('../models/member');

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
