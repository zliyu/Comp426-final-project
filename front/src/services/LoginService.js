import axios from "axios";

const LoginService = data => (
    axios.post("https://localhost:4000/registration/login", data)
        .then(res => res.status)
);

export default LoginService;