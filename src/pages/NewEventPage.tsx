import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    const event = {
        title: '',
        description: '',
        date: '',
        image: '',
    };
    return (
        <EventForm event={event}/>
    );
}

export async function addAction({request} : {request: Request}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        date: data.get('date') as string,
        image: data.get('image') as string,
    }
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Failed to add event.' }), { status: 500 });
    }

    return redirect('/events');

}