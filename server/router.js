const express = require('express');
const router = express.Router();
const { getEvents, postEvents, updateEvents, deleteEvents } = require('./controllers')


router.get('/events', getEvents);
router.post('/event', postEvents);
router.put('/event/:id', updateEvents);
router.delete('/event/:id', deleteEvents);


module.exports = router
