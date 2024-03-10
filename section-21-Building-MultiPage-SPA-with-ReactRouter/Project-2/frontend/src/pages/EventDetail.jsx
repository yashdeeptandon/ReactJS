import {
  useRouteLoaderData,
  json,
  useParams,
  redirect,
} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventsDetailPage() {
  const data = useRouteLoaderData("event-details");
  // const params = useParams();
  return <EventItem event={data.event}></EventItem>;
}

export default EventsDetailPage;

export async function loader({ request, params }) {
  // useParams can't be accessed here as hooks are only accessed inside the component function
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
