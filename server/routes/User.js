const router = require('express').Router()
const ctrls = require('../controllers/User')
router.post('/register',ctrls.register)

module.exports = router