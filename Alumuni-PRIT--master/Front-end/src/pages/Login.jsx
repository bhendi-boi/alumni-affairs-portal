import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import SubmitButton from "../components/SubmitButton";
import OtherLinks from "../components/OtherLinks";

// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import alumniLogo from "../assets/oldoldlogo_whiteishhhh.png";

const Login = () => {
  const [data, setData] = useLocalStorageState("loginData", {
    email: null,
    password: "",
  });
  const [error, setError] = useLocalStorageState("loginError", "");
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
    <>
      <main className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-base-content">
        <section className="h-full w-full sm:h-[90%] sm:w-[80%] flex flex-col items-center sm:flex-row  sm:shadow-xl sm:rounded-2xl border border-base-content text-white sm:border-[#262c5e] sm:bg-[#262c5e]">
          {/* image-container */}
          <picture className="w-full h-full sm:w-[40%] p-10 sm:p-4 sm:border-r">
            <img src={alumniLogo} alt="alumni-logo" />
          </picture>
          <div className="w-full sm:w-[60%] h-full">
            <form
              className="flex flex-col items-center justify-center w-full space-y-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <p className="self-center pt-4 text-2xl md:pt-6 lg:pt-8 xs:text-3xl">
                Login in here
              </p>
              <div className="w-[85%]">
                <label htmlFor="email" className="block py-2 text-xl">
                  Email or Username
                </label>
                <input
                  className={
                    "w-full px-4 py-2 transition duration-500 bg-transparent border-b-2 border-stone-100 border-solid text-slate-50 sm:text-lg focus:outline-none hover:border-blue-600 focus:border-blue-600 invalid:border-red-600" +
                    (!error ? "border-red-600" : "")
                  }
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div className="w-[85%]  mb-4">
                <div className="flex items-center justify-between w-full">
                  <label htmlFor="pwd" className="block py-2 text-xl">
                    Password
                  </label>
                  <button
                    onClick={handleForgotPassword}
                    className="p-2 text-base-300 transition-colors duration-200 sm:mr-2 hover:text-white"
                    type="reset"
                  >
                    <span className="text-sm">Forgot your password ?</span>
                  </button>
                </div>
                <input
                  className={
                    "w-full px-4 py-2 transition duration-500 bg-transparent border-b-2 border-stone-100 border-solid text-slate-50 sm:text-lg focus:outline-none hover:border-blue-600 focus:border-blue-600 invalid:border-red-600" +
                    (!error ? "border-red-600" : "")
                  }
                  type="password"
                  name="password"
                  id="pwd"
                  minLength={8}
                  maxLength={20}
                  value={data.password}
                  required
                  onChange={handleChange}
                />
              </div>
              {error && (
                <p className="text-red-600 capitalize w-full ml-16">{error}</p>
              )}
              <SubmitButton
                isDisabled={isDisabled}
                className={"w-3/4"}
                text={"Login"}
              />
              <p className="self-center py-4 text-base">
                Don't have an account ?{" "}
                <Link
                  to="/signup"
                  className="hover:underline focus-within:underline text-sky-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
      <OtherLinks />
    </>
  );
};

export default Login;
