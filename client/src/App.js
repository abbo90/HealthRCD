import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import EventForm from './EventForm';
import EventList from './EventList';
import { getEvents } from './apiClient';

function App() {
  const [events, setEvents] = useState([])

  const handleClick = (newEvent) => {
    setEvents(prevEvent => [...prevEvent, newEvent]);
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
        <div className='left-side'>
          <EventForm onSubmit={handleClick} />
        </div>
        <EventList events={events} />
      </div>



    </>
  );
}

export default App;
