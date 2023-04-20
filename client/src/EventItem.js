

export default function EventItem({ event }) {
  const eventDate = new Date(event.date);
  const formattedDate = `${eventDate.toLocaleDateString()} ${eventDate.toLocaleTimeString()}`;



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
            <button>delete</button>
          </div>

        </div>
      </div>


    </>
  )
}
