import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/signup" element={<SignupView />} />
            </Routes>
        </main>
    );
}

export default App;
