import "./WhyChoose.css";
import {
    HiOutlineCamera,
    HiOutlineHeart,
    HiOutlineSparkles,
    HiOutlineClock
} from "react-icons/hi2";
function WhyChoose() {

    return (
        <section className="why-choose">
            <div className="why-header">
                <p className="section-label">
                    WHY CHOOSE US
                </p>
                <h2>
                    More Than Photography,
                    <br />
                    We Capture Emotions.
                </h2>
            </div>
            <div className="why-grid">
                <div className="why-card">
                    <div className="card-icon">
    <HiOutlineCamera />
</div>
                    <h3>Candid Storytelling</h3>
                    <p>
                        Natural moments captured with genuine emotions.
                    </p>
                </div>
                <div className="why-card">
                    <div className="card-icon">
    <HiOutlineHeart />
</div>
                    <h3>Personalized Experience</h3>
                    <p>
                        Every celebration is unique, and so is our approach.
                    </p>
                </div>
                <div className="why-card">
                   <div className="card-icon">
    <HiOutlineClock />
</div>
                    <h3>Fast Delivery</h3>
                    <p>
            Beautifully edited memories delivered on time.
                    </p>
                </div>
                <div className="why-card">
                   <div className="card-icon">
    <HiOutlineSparkles />
</div>

    <h3>Premium Editing</h3>
        <p>
    Elegant color grading with timeless finishing touches.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default WhyChoose;