import "./Dashboard.css";
import { Link } from "react-router-dom";
import { FaImages } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    async function handleLogout(){

        await supabase.auth.signOut();

        navigate("/admin");

    }

    return (

        <section className="dashboard">

            <div className="dashboard-header">

                <h1>

                    Photographer<span>Vaiya</span>

                </h1>

                <p>

                    Content Management System

                </p>

            </div>

            <div className="dashboard-grid">

<Link
    to="/dashboard/gallery"
    className="dashboard-card"
>

    <FaImages />

    <h3>Gallery Manager</h3>

</Link>

                <Link
                    to="/dashboard/featured"
                    className="dashboard-card"
                >

                    <MdArticle />

                    <h3>

                        Featured Story

                    </h3>

                </Link>

                <button
                    className="dashboard-card logout"
                    onClick={handleLogout}
                >

                    <FiLogOut />

                    <h3>

                        Logout

                    </h3>

                </button>

            </div>

        </section>

    );

}

export default Dashboard;