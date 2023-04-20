import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <>
      <div className="right-container">
        <h1>Latest records :</h1>
        {events.map((event) => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>

    </>

  )
}
