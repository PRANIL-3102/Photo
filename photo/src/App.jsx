import { Routes, Route,} from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import FeaturedStory from "./components/home/FeaturedStory/FeaturedStory";
import WhyChoose from "./components/home/WhyChoose/WhyChoose";
import Services from "./components/home/Services/Services";
import Gallery from "./components/home/Gallery/Gallery";
import Booking from "./components/home/Booking/Booking";
import Footer from "./components/layout/Footer/Footer";
import Loader from "./components/layout/Loader/Loader";
import Login from "./admin/Login/Login";
import Dashboard from "./admin/Dashboard/Dashboard";
import GalleryManager from "./admin/GalleryManager/GalleryManager";
import ProtectedRoute from "./admin/ProtectedRoute";
import "./styles/animations.css";
import { useState, useEffect } from "react";
function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        },1500);
        return () => clearTimeout(timer);
    }, []);
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
    );
}


function App(){
    return(
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/admin"
                element={<Login />}
            />
            <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/>

<Route
    path="/dashboard/gallery"
    element={
        <ProtectedRoute>
            <GalleryManager />
        </ProtectedRoute>
    }
/>
        </Routes>
        
    );
}

export default App;