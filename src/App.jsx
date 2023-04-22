import Topbar from "./components/topbar/Topbar";
import Introo from "./components/intro/Introo";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.css";

function App() {
  return (
    <div className="app">
    <Topbar/> 
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
