const express = require("express");
const router = express.Router();
const {requireSignin} = require('../controllers/auth')
const {calendar} = require('../controllers/calendar')

router.post('/calender', calendar, requireSignin)

module.exports = router;