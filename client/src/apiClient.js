
const getEvents = async () => {
  try {
    const response = await fetch('http://localhost:3004/events');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);

  }
}


const postEvents = async (title, date, textarea) => {
  try {
    const response = await fetch('http://localhost:3004/event', {
      method: 'POST',
      body: JSON.stringify({ title, date, textarea }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

}

const updateEvents = async (eventId, updatedEvent) => {
  try {
    const response = await fetch(`http://localhost:3004/event/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedEvent),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json();
    return data

  } catch (err) {
    console.log(err)
  }
}

const deleteEvents = async (eventId) => {
  try {
    const response = await fetch(`http://localhost:3004/event/${eventId}`, {
      method: 'DELETE',
    })
  } catch (err) {
    console.log(err)
  }
}


module.exports = {
  getEvents,
  postEvents,
  updateEvents,
  deleteEvents
}
