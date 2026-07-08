import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import FeaturedStory from "./components/home/FeaturedStory/FeaturedStory";
import WhyChoose from "./components/home/WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStory />
      <WhyChoose />
    </>
  );
}

export default App;