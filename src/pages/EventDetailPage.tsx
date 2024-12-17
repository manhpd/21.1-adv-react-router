import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import { EVENTS } from "./EventsPage";

export default function EventDetailPage() {
    const params = useParams();
    const eventId = params.eventId;
    const event = EVENTS.find((event) => event.id === eventId);
    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <EventForm event={event} />
    );
}