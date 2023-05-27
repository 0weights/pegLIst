const express = require('express')
const router = express.Router()
const gifController = require('../controllers/gifController')
router.get('/:gifId', gifController.getRandomGif)

module.exports = router