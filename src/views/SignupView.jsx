import { useState, useEffect } from "react";
import { register } from "../service/autenticate.js";

export default function SignupView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleInput = async (e) => {
        e.preventDefault();
        const data = { username, password };

        const resp = await register(data);
        setError("You are now signed up");
        return resp;
    };
    return (
        <section>
            <div className="flex flex-col items-center justify-center ">
                <form
                    onSubmit={handleInput}
                    className="flex flex-col gap-4 rounded-lg bg-secondary px-10 py-8"
                    action=""
                >
                    <h1 className="text-center text-lg">Signup</h1>
                    <p>Don´t you have an account? Then sign up!</p>
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
                            Sign up
                        </button>
                    </div>
                    {error && <div className="flex flex-col items-center">{error} </div>}
                </form>
            </div>
        </section>
    );
}
