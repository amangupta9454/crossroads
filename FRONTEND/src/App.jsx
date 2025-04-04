import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Add this import
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import Registration from "./Components/Registration.jsx";
import EventDetail from "./Components/EventDetail.jsx";
import Event from "./Components/Event.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <NavBar />
        <Event />
      </>
    ),
  },
  {
    path: "/registration",
    element: (
      <>
        <NavBar />
        <Registration />
        
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
  {
    path: "/event/:id",
    element: (
      <>
        <NavBar />
        <EventDetail />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;