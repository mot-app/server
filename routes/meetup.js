const router = require('express').Router()

// Get all meetups
router.get('/meetups', (req, res) => {
	res.send('Get all meetups')
})

// Create a meetup
router.post('/meetup', (req, res) => {
	res.send('Create a meetup')
})

// Read a meetup
router.get('/meetup/:id', (req, res) => {
	res.send('Read a meetup')
})

// Update a meetup
router.put('/meetup/:id', (req, res) => {
	res.send('Update a meetup')
})

// Delete a meetup
router.delete('/meetup/:id', (req, res) => {
	res.send('Delete a meetup')
})
module.exports = router
