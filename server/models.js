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

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }

})

const Event = mongoose.model('Event', schema, 'events');
const User = mongoose.model('User', userSchema, 'user');


module.exports = { Event, User };
