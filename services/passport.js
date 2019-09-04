const passport = require('passport')
const Strategy = require('passport-facebook').Strategy
const db = require('../database/firestore')
const keys = require('../config/keys')

passport.serializeUser((user, cb) => {
	cb(null, user.id)
})

passport.deserializeUser(async (id, cb) => {
	const snapshot = await db
		.collection('users')
		.where('id', '==', id)
		.get()
	cb(null, snapshot.doc)
})

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_APP_ID,
			clientSecret: keys.FACEBOOK_APP_SECRET,
			callbackURL: 'http://localhost:3000/auth/facebook/callback'
		},
		async (accessToken, refreshToken, profile, cb) => {
			const snapshot = await db
				.collection('users')
				.where('id', '==', id)
				.get()
			if (snapshot.empty) {
				// create new user and add to database
				console.log(profile)
				return cb(null, snapshot.doc)
			} else {
				return cb(null, snapshot.doc)
			}
		}
	)
)
