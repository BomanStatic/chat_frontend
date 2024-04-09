import { jwtDecode } from "jwt-decode";
import { sendData } from "../utils/requests";

async function authenticate(credentials) {
    const resp = await sendData("http://localhost:3000/auth/login", credentials);

    if (resp.status == 200) {
        const { token } = await resp.json();

        const theToken = token;
        const decoded = jwtDecode(theToken);

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", decoded.role);

        return { authenticated: true };
    } else {
        return { authenticated: false };
    }
}

async function register(data) {
    const resp = await sendData("http://localhost:3000/auth/signup", data);
}

export { authenticate, register };
