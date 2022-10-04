import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    console.log([Email, password]);
    try {
      const url = "http://localhost:8001/Login";
      const { data: res } = await axios.post(url, {
        email: Email,
        password: password,
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <h1>This is the Login page</h1>
      <form>
        <label>Enter your Email</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(`${e.target.value}`);
          }}
          placeholder="email"
          style={{ border: "1px" + " solid " + " black", padding: "5px" }}
        ></input>
        <br></br>
        <label>Enter your password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(`${e.target.value}`);
          }}
          placeholder="password"
          style={{ border: "1px" + " solid " + " black", padding: "5px" }}
        ></input>
        <br></br>
        <button type="submit" style={{ background: "grey" }} onClick={Login}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
