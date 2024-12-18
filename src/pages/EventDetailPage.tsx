import { useLoaderData, useParams, useRouteError, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import EventItem from "../components/EventItem";
import EventsNavigation from "../components/EventsNavigation";
export default function EventDetailPage() {
    const data = useRouteLoaderData('eventDetail');
    const event = data.event;

    return (
        // <EventForm event={event} />
        <>
            <EventsNavigation></EventsNavigation>
            <EventItem event={event} />
        </>
      
    );
}

export async function eventLoader({ params }: any) {
    const eventId = params.eventId;

    const response  = await fetch(`http://localhost:8080/events/${eventId}`);
    if (!response.ok) {
        // setError('Fetching events failed.');
        throw new Response(JSON.stringify({ message: 'Fetching events failed.' }), { status: 500 });
    } else {
        return response;
    }
}