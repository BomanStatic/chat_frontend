import { IoIosLogIn } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authenticate } from "../service/autenticate.js";

export default function LoginView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault();
        const data = { username, password };
        const resp = await authenticate(data);
        const role = sessionStorage.getItem("role");
        try {
            if (resp.authenticated && role === "User") {
                navigate("/");
            } else {
                setError("Wrong sign in informations..");
            }
        } catch (e) {
            console.e(400);
            setError("Something went wrong");
        }
    };
    return (
        <section>
            <div className="flex flex-col items-center justify-center ">
                <form
                    onSubmit={handleInput}
                    className="flex flex-col gap-4 rounded-lg bg-secondary px-10 py-8"
                    action=""
                >
                    <h1 className="text-center text-lg">Login</h1>
                    <div className="flex flex-col">
                        <label htmlFor="Username">Username</label>
                        <input
                            className="text rounded-lg px-1 py-1 text-background focus:bg-primary"
                            type="text"
                            name="Username"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            className="placeholder:text-red rounded-lg px-1 py-1 text-background focus:bg-primary"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            className="rounded-lg bg-primary px-4 py-2  text-background transition-colors hover:bg-primary/70"
                        >
                            <IoIosLogIn />
                        </button>
                    </div>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </section>
    );
}
