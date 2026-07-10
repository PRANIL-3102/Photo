import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleLogin(e){

        e.preventDefault();

        setLoading(true);

        setError("");

        const { error } = await supabase.auth.signInWithPassword({

            email,
            password,

        });

        setLoading(false);

        if(error){

            setError(error.message);

            return;

        }

        navigate("/dashboard");

    }

    return(

        <section className="login">

            <form
                className="login-card"
                onSubmit={handleLogin}
            >

                <h1>

                    Photographer
                    <span>Vaiya</span>

                </h1>

                <p>

                    Admin CMS Login

                </p>

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    required

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    required

                />

                {

                    error &&

                    <small>{error}</small>

                }

                <button>

                    {

                        loading

                        ?

                        "Logging in..."

                        :

                        "Login"

                    }

                </button>

            </form>

        </section>

    );

}

export default Login;