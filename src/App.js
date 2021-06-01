import React, { useState } from "react"
import LoginForm from "./components/LoginForm"
import MainPage from "./components/MainPage"

export default function App() {
  const adminUser = {
    email: "nice@admin.com",
    password: "123456"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Do not match");
      setError("not match")
    }
  }

  const Logout = () => {
    console.log("out");
    setUser({
      name: "",
      email: ""
    });
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <MainPage name={user.name} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
