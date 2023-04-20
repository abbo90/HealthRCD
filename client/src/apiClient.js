
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
  } catch (error) {
    console.log(error);
  }

}
module.exports = {
  getEvents,
  postEvents
}
