import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact.jsx";
import "./App.css"
function App() {
  return (
    <div>
    <Navbar />
    <Contact/>
    <main>
      <Outlet /> 
    </main>
    <Footer />
  </div>
  );
}

export default App;
