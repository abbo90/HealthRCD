import React, { useState } from "react";
import { postEvents } from "./apiClient";

export default function EventForm(props) {
  const [titleText, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  //onClick submit
  const handleClick = (e) => {
    e.preventDefault();
    if (titleText && dateTime && description) {
      postEvents({ title: titleText, date: dateTime, textarea: description }).then(newTopic => {
        console.log(newTopic)
        props.onSubmit(newTopic);
        setTitle('');
        setDateTime('');
        setDescription('');
      });
    }
  };

  return (
    <form className="form">
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
        <button onClick={handleClick}>Submit</button>

      </div>
    </form>
  );
}
