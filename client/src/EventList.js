import EventItem from "./EventItem";

export default function EventList({ events, onEdit }) {
  events.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <div className="right-container">
        {events.length === 0 ? (
          <h1 id="no-events">No events</h1>
        ) : (
          <div>
            <h1>Latest records :</h1>
            {events.map((event) => (
              <EventItem key={event._id} event={event} onEdit={onEdit} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
