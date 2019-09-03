const Firestore = require('@google-cloud/firestore')
const keys = require('../config/keys')

const database = new Firestore({
	projectId: keys.GOOGLE_PROJECT_ID,
	keyFilename: './mot-app-server.json'
})

module.exports = database
