import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/NavSection/Home";
import About from "./components/NavSection/About";
import Gallery from "./components/NavSection/Gallery";
import Contact from "./components/NavSection/Contact";
import NoPage from "./components/NavSection/NoPage";
import Navv from "./components/NavSection/Navv";
import UserActions from "./components/NavSection/UserActions";
import DropDown from "./Dropdown";
import Counting from "./Counting";

function App() {
  return (
    <div className="App">
      <Navv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-actions" element={<UserActions />} />        
        <Route path="/counter" element={<Counting />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <DropDown /> */}
    </div>
  );
}

export default App;
