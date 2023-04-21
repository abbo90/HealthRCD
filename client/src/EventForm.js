import React, { useState, useEffect } from "react";
import { postEvents, updateEvents } from "./apiClient";

export default function EventForm(props) {
  const [titleText, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = {
      title: titleText,
      date: dateTime,
      textarea: description,
    };
    if (props.selectedEvent) {
      await updateEvents(props.selectedEvent._id, eventData);
      props.onUpdate();
    } else {

      const newEvent = await postEvents(eventData);
      props.onSubmit(newEvent);
    }
    setTitle('');
    setDateTime('');
    setDescription('');
  };

  useEffect(() => {
    if (props.selectedEvent) {
      setTitle(props.selectedEvent.title);
      setDateTime(props.selectedEvent.date);
      setDescription(props.selectedEvent.textarea);
    }
  }, [props.selectedEvent]);// will run only if selectedEvent state changes

  return (
    <div className='left-side'>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label >Title:</label>
          <input
            type="text"
            id="title"
            value={titleText}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label >Date and Time:</label>
          <input
            type="datetime-local"
            id="datetime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div>
          <label >Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="btn">
          <button >Submit</button>

        </div>
      </form>
    </div>
  );
}
