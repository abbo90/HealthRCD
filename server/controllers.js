const Event = require('./models')


async function getEvents(req, res, next) {
  try {
    const event = await Event.find()
    res.status(200).json(event)
  } catch (err) {
    console.error(err)
    res.status(500)
    res.json({ error: 'Failed to get events' })
  }
}

async function postEvents(req, res, next) {
  // console.log(req.body.title)
  try {
    const newEvent = await new Event({
      title: req.body.title.title,
      date: req.body.title.date,
      textarea: req.body.title.textarea
    })
    await newEvent.save()
    res.status(201).json(newEvent)
  } catch (err) {
    console.error(err)
    res.status(500)
    res.json({ error: 'Failed to create event' })
  }
}

async function updateEvents(req, res, next) {
  //sconsole.log(req.params.id)
  try {
    const updateEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateEvent) {
      res.status(404)
      res.json({ error: ' Event Not Found' });
    }
    res.status(200)
    res.json(updateEvent);
  } catch (err) {
    res.status(500)
    res.json({ error: 'Failed to update event' })

  }

}


async function deleteEvents(req, res, next) {
  try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.id, req.body)
    if (!deleteEvent) {
      res.status(404)
      res.json({ error: ' Event Not Found' });
    }
    res.status(200)
    res.json({ message: 'Event Deleted' });

  } catch (err) {
    res.status(500)
    res.json({ error: 'Failed to delete event' })
  }
}





module.exports = {
  getEvents,
  postEvents,
  updateEvents,
  deleteEvents
}
