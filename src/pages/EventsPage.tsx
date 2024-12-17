import EventItem from "../components/EventItem";

export const EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Ever wanted to learn programming? Here is your chance!',
        location: 'Online',
        date: '2022-03-15',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            'You probably need no help with networking in the traditional sense, but we will teach you how to do it from the comfort of your own home!',
        location: 'Online',
        date: '2022-04-10',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    }];

export default function EventsPage() {
    

  return (
    <>
        <h1>Events Page</h1>
        <p>Events will be listed here.</p>
        <ul>
            {EVENTS.map((event) => (
                <li key={event.id}>
                   <EventItem event={event} />
                </li>
            ))}

        </ul>
    </>
  ) ;
}