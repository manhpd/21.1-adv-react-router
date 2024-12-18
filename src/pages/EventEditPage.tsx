import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EventEditPage() {
    const data = useRouteLoaderData('eventDeta');
    const event = data.event;
  return (
    <EventForm event={event} />
  );
}