import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import "./index.css";
import ContactUs from "./Components/ContactUs.jsx";
import Ourservices from "./Components/Ourservices.jsx";
import Event from "./Components/Event.jsx"
import Privacy from "./Components/Privacy.jsx";
import Certificate from "./Components/Certificate.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about-us",
        element: <About />,
      },
     
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
     
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/our-services",
        element: <Ourservices />,
      },
      {
        path: "/Certificate",
        element: <Certificate />,
      },
      
      {
        path: "/privacy",
        element: <Privacy />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
