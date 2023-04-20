import { deleteEvents } from "./apiClient";
import { useState } from "react";
export default function EventItem({ event }) {
  const [deleted, setDeleted] = useState(false);


  const eventDate = new Date(event.date);
  const formattedDate = `${eventDate.toLocaleDateString()} ${eventDate.toLocaleTimeString()}`;

  const handleDelete = async () => {
    await deleteEvents(event._id);
    setDeleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <>
      <div className="right-side">
        <div className="events">
          <h2>{event.title}</h2>
          <p>{event.textarea}</p>
        </div>
        <div className="flex">
          <div className="date">
            <span>{formattedDate}</span>
          </div>
          <div className="buttons-item">
            <button id="first-btn">edit</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        </div>
      </div>

    </>
  )
}
