import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';

interface Event {
  title: string;
  image: string;
  date: string;
  description: string;
}

function EventForm({ event }: { event: Event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('/events');
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required value={event.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required value={event.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required value={event.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required  value={event.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
