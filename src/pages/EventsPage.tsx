import EventsList from '../components/EventsList';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';



function EventsPage() {
    const data = useRouteLoaderData('events');

    const events = data.events;

    return (
        <>
            <EventsList events={events} ></EventsList>
        </>
    );
}

export async function loader() {
    const response  = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // setError('Fetching events failed.');
        throw new Response(JSON.stringify({ message: 'Fetching events failed.' }), { status: 500 });
    } else {
        return response;
    }
}

export default EventsPage;