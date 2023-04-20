const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Event');
    console.log('Connected to MongoDB 😎!');
  } catch (err) {
    console.err(err);
  }
}
main();

const schema = new Schema({
  title: String,
  date: {
    type: Date,
  },
  textarea: String
});

const Event = mongoose.model('Event', schema, 'events');

module.exports = Event;
