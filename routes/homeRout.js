const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
router.get("/", homeController.getIndexPage)
router.get("/all", homeController.getAllPage)


module.exports = router