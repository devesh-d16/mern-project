import React, { useState } from "react";
import "./CSS/loginsignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const login = async () => {
  //   console.log("Logic Function Executed", formData);
  //   let responseData;
  //   await fetch("http://localhost:4000/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => (responseData = data));
  //   if (responseData.success) {
  //     localStorage.setItem("auth_token", responseData.token);
  //     window.location.replace("/");
  //     console.log("gya khtm");
  //   } else {
  //     alert(responseData.errors);
  //   }
  // };

  // const signup = async () => {
  //   console.log("Signup Function Executed", formData);
  //   let responseData;
  //   await fetch("http://localhost:4000/signup", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => (responseData = data));
  //   if (responseData.Success) {
  //     localStorage.setItem("auth_token", responseData.token);
  //     window.location.replace("/");
  //   } else {
  //     alert(responseData.errors);
  //   }
  // };
  const login = async () => {
    console.log("Login Function Executed", formData);
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log("Login Response Data", responseData);
      if (responseData.Success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        console.log(responseData.error);
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Login Error", error);
      alert("An error occurred during login. Please try again.");
    }
  };
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log("Signup Response Data", responseData);
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");
      } else {
        console.log(responseData.error);
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Signup Error", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
