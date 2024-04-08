import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <header className="flex items-center justify-between px-6 py-4">
            <Link to={"/"}>
                <h1 className="text-2xl font-bold">New Connections</h1>
            </Link>
            <ul className="flex gap-4 text-lg font-semibold">
                <li>
                    <Link
                        className="rounded-lg bg-primary px-4 py-2 text-background transition-colors hover:bg-primary/70"
                        to={"/login"}
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        className="rounded-lg bg-secondary px-4 py-2 transition-colors hover:bg-secondary/70"
                        to={"/signup"}
                    >
                        Signup
                    </Link>
                </li>
            </ul>
        </header>
    );
}
