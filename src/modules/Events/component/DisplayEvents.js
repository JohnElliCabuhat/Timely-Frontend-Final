import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetEvt } from "../../actions";


const DisplayEvents = () => {
  const events = useSelector((state) => state.EventsApi);
  console.log(events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetEvt());
  }, []);

  const eventList = events.length ? (
    events.map((event) => {
      return (
        <div key={event.evid}>
          <p>Event Name: {event.eventName}</p>
          <p>Event eventDescription: {event.eventDescription}</p>
          <img src={event.eventImage}/>
          <hr></hr>
        </div>
      );
    })
  ) : (
    <p>No post yet</p>
  );
  return <div>{eventList}</div>;
};

export default DisplayEvents;
