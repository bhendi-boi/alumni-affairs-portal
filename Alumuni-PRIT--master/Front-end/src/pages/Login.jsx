import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import SubmitButton from "../components/SubmitButton";

// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import alumniLogo from "../assets/oldoldlogo_whiteishhhh.png";

const Login = () => {
  const [data, setData] = useLocalStorageState("loginData", {
    email: null,
    password: "",
  });
  const error = useLocalStorageState("loginError", "password donot match");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  // helper functions
  const validateData = () => {
    if (data.email !== null && data.password.length > 7) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setData((prev) => ({ ...prev, email: `${e.target.value}` }));
    } else {
      setData((prev) => ({ ...prev, password: `${e.target.value}` }));
    }
    validateData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8001/Login";
      const { data: res } = await axios.post(url, {
        email: data.email,
        password: data.password,
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
    console.log("dm");
  };

  const handleForgotPassword = () => {
    // ? backend
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] w-full flex justify-center items-center bg-base-content overflow-hidden relative">
      {/* todo: find a good bg */}
      {/* <div className="login-bg"></div> */}

      <div className="w-full h-full md:w-[80%] md:h-[80%] sm:z-10 flex flex-col items-center justify-center text-white ">
        <section className="h-full w-full sm:h-[90%] sm:w-[80%] flex flex-col items-center sm:flex-row  sm:shadow-xl sm:rounded-2xl border border-base-content sm:border-[#262c5e] sm:bg-[#262c5e]">
          {/* image-container */}
          <div className="w-full h-full sm:w-[40%] flex items-center p-5 sm:border-r">
            <img src={alumniLogo} alt="alumni-logo" className="block" />
          </div>
          <div className="w-full sm:w-[60%] h-full">
            <form
              className="space-y-4 w-full flex flex-col justify-center items-center"
              onSubmit={(e) => handleSubmit(e)}
            >
              <p className="self-center pt-4 md:pt-6 lg:pt-8 text-base xs:text-2xl">
                Login to continue using this site
              </p>
              <div className="w-[85%]">
                <label htmlFor="email" className="py-2 block">
                  Email or Username
                </label>
                <input
                  className={
                    "w-full px-4 py-2 ring-2 rounded-md text-base-content transition duration-300 focus:ring-2 focus:ring-black  focus:outline-none invalid:ring-2 invalid:ring-red-600 " +
                    (!error ? "ring-red-600" : "")
                  }
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="w-[85%]  mb-4">
                <div className="w-full flex items-center justify-between">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <button
                    onClick={handleForgotPassword}
                    className="p-2 sm:mr-2"
                    type="reset"
                  >
                    <span className="text-sm">Forgot your password ?</span>
                  </button>
                </div>
                <input
                  className={
                    "w-full px-4 py-2 rounded-md  text-base-content transition duration-300 focus:ring-2 focus:ring-black focus:outline-none invalid:ring-2 invalid:ring-red-600 " +
                    (error ? "ring-red-600" : "")
                  }
                  type="password"
                  name="password"
                  id="pwd"
                  value={data.password}
                  required
                  onChange={handleChange}
                />
              </div>
              {!error && (
                <div>
                  <p className="text-error">{error}</p>
                </div>
              )}
              <div className="block w-[85%] pt-4">
                <SubmitButton
                  isDisabled={isDisabled}
                  className={"block w-full h-10"}
                  text={"Login"}
                />
              </div>
              <p className="border-t sm:border-none py-4 sm:pt-3 text-base self-center">
                Don't have an account ?{" "}
                <Link to="/signup" className="text-sky-600 hover:opacity-75">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
