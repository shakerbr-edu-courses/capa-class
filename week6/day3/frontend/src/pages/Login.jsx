import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      setError("Email and password can't be empty");
    } else {
      setError("");
    }

    try {
      const response = await fetch("http://localhost:3931/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } catch (e) {
      setError("Error: Couldn't login, please try again later.")
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      {error && <p className="text-red-400">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="block p-2 mt-3 border rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="block p-2 mt-3 border rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-900 text-white px-6 py-2 mt-3 rounded-lg"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
