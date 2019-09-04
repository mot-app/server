const router = require('express').Router()

// Login user
router.get('/facebook/login', (req, res) => {
	res.send('Login user')
})

module.exports = router
