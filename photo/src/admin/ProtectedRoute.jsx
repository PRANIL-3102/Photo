import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function ProtectedRoute({ children }) {

    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {

        async function checkSession() {

            const { data } = await supabase.auth.getSession();

            setSession(data.session);

            setLoading(false);

        }

        checkSession();

    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (!session) {

        return <Navigate to="/admin" replace />;

    }

    return children;

}

export default ProtectedRoute;