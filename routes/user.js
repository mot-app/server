const router = require('express').Router()

// Get all users
router.get('/meetups', (req, res) => {
	res.send('Get all users')
})

// Create a user
router.post('/meetup', (req, res) => {
	res.send('Create a user')
})

// Read a user
router.get('/meetup/:id', (req, res) => {
	res.send('Read a user')
})

// Update a user
router.put('/meetup/:id', (req, res) => {
	res.send('Update a user')
})

// Delete a user
router.delete('/meetup/:id', (req, res) => {
	res.send('Delete a user')
})
module.exports = router
