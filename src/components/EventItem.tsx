import { Link } from 'react-router-dom';
import classes from './EventItem.module.css';

interface Event {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

function EventItem({ event }: { event: Event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event} >
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to='edit'>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
