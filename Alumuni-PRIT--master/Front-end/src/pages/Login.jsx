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
    <main className="min-h-screen w-full flex justify-center items-center bg-base-content overflow-hidden relative">
      {/* todo: find a good bg */}
      {/* <div className="login-bg"></div> */}

      <div className="w-full h-full md:w-[80%] md:h-[80%] sm:z-10 flex flex-col items-center justify-center text-white ">
        <section className="h-full w-full sm:h-[90%] sm:w-[80%] flex flex-col items-center sm:flex-row  sm:shadow-xl sm:rounded-2xl border border-base-content sm:border-[#262c5e] sm:bg-[#262c5e]">
          {/* image-container */}
          <picture className="w-full h-full sm:w-[40%] flex items-center p-20 sm:border-r">
            <img src={alumniLogo} alt="alumni-logo" className="block" />
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
                    "w-full px-4 py-2 transition duration-1000 bg-transparent border-b-2 border-slate-400 border-solid text-slate-200 focus:outline-none hover:border-blue-600 focus:border-blue-600 invalid:border-red-600" +
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
                    className="p-2 transition-colors duration-200 sm:mr-2 hover:text-blue-600"
                    type="reset"
                  >
                    <span className="text-sm">Forgot your password ?</span>
                  </button>
                </div>
                <input
                  className={
                    "w-full px-4 py-2 transition duration-1000 bg-transparent border-b-2 border-slate-400 border-solid text-slate-200 focus:outline-none hover:border-blue-600 focus:border-blue-600 invalid:border-red-600 " +
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
              <p className="self-center py-4 text-base border-t sm:border-none sm:pt-3">
                Don't have an account ?{" "}
                <Link
                  to="/signup"
                  className="opacity-75 text-sky-600 hover:text-blue-600 hover:opacity-100"
                >
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
