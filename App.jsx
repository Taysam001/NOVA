import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Approach from "./Approach";
import Results from "./Results";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Approach />
        <Results />
        <About />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}