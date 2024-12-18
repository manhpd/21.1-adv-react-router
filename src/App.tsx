// Challenge / Exercise
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader } from "./pages/EventsPage";
import EventDetailPage, { eventLoader } from "./pages/EventDetailPage";
import ErrorPage from "./pages/ErrorPage";
import EventEditPage from "./pages/EventEditPage";
import NewEventPage, { addAction } from "./pages/NewEventPage";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: "events", loader: loader,
        id: "events",
        children: [
          { index: true, element: <EventsPage /> },
          { path: "new", element: <NewEventPage />, action: addAction },
          {
            path: ":eventId",
            loader: eventLoader,
            id: "eventDetail",
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EventEditPage />  },
    
            ]
          }
        ]
       },
      

    ]
  },
]);
function App() {
  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
