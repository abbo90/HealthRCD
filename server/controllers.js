const Event = require('./models')


async function getEvents(req, res, next) {
  try {
    const event = await Event.find()
    res.status(200).json(event)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to get events' })
  }
}

async function postEvents(req, res, next) {
  console.log(req.body)
  try {
    const newEvent = await new Event({
      title: req.body.title.title,
      date: req.body.title.date,
      textarea: req.body.title.textarea
    })
    await newEvent.save()
    res.status(201).json(newEvent)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Failed to create event' })
  }
}

async function updateEvents() {

}


async function deleteEvents() { }





module.exports = {
  getEvents,
  postEvents,
  updateEvents,
  deleteEvents
}
