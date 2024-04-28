import { Bounce, Slide, ToastContainer } from "react-toastify";
import Test from "./Test.jsx";
import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="Portfolio">
        <Services />
      </section>
      <section id="Contact">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      <section>
        <Contact />
      </section>

      <ToastContainer
        position="bottom-center"
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default App;
