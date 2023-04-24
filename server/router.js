const express = require('express');
const router = express.Router();
const { getEvents, postEvents, updateEvents, deleteEvents } = require('./controllers')
const { login, logout, register } = require('./user')
const auth = require('./auth')

router.get('/events', auth, getEvents);
router.post('/event', auth, postEvents);
router.put('/event/:id', auth, updateEvents);
router.delete('/event/:id', auth, deleteEvents);

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router
