const express = require('express')
const router = express.Router()
const fileRoute = require('./file.routes')

router.use('/api',fileRoute)

module.exports = router