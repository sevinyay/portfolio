import Topbar from "./components/topbar/Topbar";
import Introo from "./components/intro/Introo";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.css";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
    <Menu/>
    <div className="sections"> 
    <Introo/> 
    <Portfolio/> 
    <Works/>
    <Testimonials/> 
    <Contact/> 
    </div>         
    </div>
  );
}

export default App;
