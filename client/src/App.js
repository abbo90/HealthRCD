import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import EventForm from './EventForm';
import EventList from './EventList';
import { getEvents, updateEvents } from './apiClient';

function App() {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null); // selected elemen(event)



  const handleClick = (newEvent) => {
    setEvents(prevEvent => [...prevEvent, newEvent]);
  };
  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  //function from apiClient to update the selected event
  const handleUpdate = async (updatedEvent) => {
    await updateEvents(selectedEvent._id, updatedEvent);
    setSelectedEvent(null);
    getEvents().then((data) => {
      setEvents(data);
    });
  };

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <EventForm onSubmit={handleClick} selectedEvent={selectedEvent} onUpdate={handleUpdate} />
        <EventList events={events} onEdit={handleEdit} />
      </div>



    </>
  );
}

export default App;
