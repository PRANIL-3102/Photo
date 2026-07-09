import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import FeaturedStory from "./components/home/FeaturedStory/FeaturedStory";
import WhyChoose from "./components/home/WhyChoose/WhyChoose";
import Services from "./components/home/Services/Services";
import Gallery from "./components/home/Gallery/Gallery";
import Booking from "./components/home/Booking/Booking";
import Footer from "./components/layout/Footer/Footer";
import Loader from "./components/layout/Loader/Loader";
import "./styles/animations.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {

    const timer = setTimeout(() => {

        setLoading(false);

    },1500);

    return () => clearTimeout(timer);

},[]);
  return(

<>

{loading && <Loader />}

{!loading && (

<>

<Navbar />

<Hero />

<FeaturedStory />

<WhyChoose />

<Services />

<Gallery />

<Booking />

<Footer />

</>

)}

</>

)
}

export default App;