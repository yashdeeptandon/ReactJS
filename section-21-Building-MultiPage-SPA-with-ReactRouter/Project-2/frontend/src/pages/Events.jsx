import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // this can be used only inside the child components.
  // component which is above the hierchy level will not be able to use this useLoaderData
  // data -> Object with events key
  // data.events -> array

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  // this code runs on browser. not on backend server.
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError:true, message: "Could not fetch events."}
    // throw new Response(JSON.stringify({ message: "Failed to load events" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    return response;
  }
}
