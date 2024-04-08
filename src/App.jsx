import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/signup" element={<SignupView />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
