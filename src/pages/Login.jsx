import { useState } from "react";
import { Link } from "react-router-dom";

// components
import SubmitButton from "../components/SubmitButton";

// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import iiitdmLogo from "../assets/images/iiitdmLogo.png";

const Login = () => {
  const [data, setData] = useLocalStorageState("loginData", {
    email: null,
    password: "",
  });
  const error = useLocalStorageState("loginError", "password donot match");
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(data);

  // helper functions
  const validateData = () => {
    if (data.email !== null && data.password.length > 7) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setData((prev) => ({ ...prev, email: `${e.target.value}` }));
    } else {
      setData((prev) => ({ ...prev, password: `${e.target.value}` }));
    }
    console.log(data.password.length);
    validateData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ? send a post request to backend
  };
  const handleForgotPassword = () => {
    // ? backend
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <div className="w-[80%] h-[80%] flex flex-col items-center justify-center">
        <section className="h-[80%] w-[80%] flex flex-col flex-grow sm:flex-row md:flex-grow-0 bg-white shadow-xl rounded-2xl">
          <div className="w-full h-[200px]  sm:h-full sm:w-[40%] border flex  bg-sky-200 p-10">
            <img src={iiitdmLogo} alt="logo" className="self-center" />
          </div>
          <div className="w-full sm:w-[60%] h-full">
            <form className="space-y-4 w-full flex flex-col justify-center items-center">
              <p className="self-center pt-4  sm:pt-8">
                Login to continue using this site
              </p>
              <div className="w-[85%]">
                <label htmlFor="email" className="py-2 block text-gray-700">
                  Email or Username
                </label>
                <input
                  className={
                    "w-full p-2 ring-2 ring-sky-300 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-blue-600 focus:outline-none invalid:ring-2 invalid:ring-red-600" +
                    (error ? "ring-red-600" : "")
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
                  <label htmlFor="password" class="text-gray-700">
                    Password
                  </label>
                  <button
                    onClick={handleForgotPassword}
                    className="p-2 mr-2"
                    type="reset"
                  >
                    <span class="text-sm text-gray-700">
                      Forgot your password ?
                    </span>
                  </button>
                </div>
                <input
                  className={
                    "w-full p-2 ring-2 ring-sky-300 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-blue-600 focus:outline-none invalid:ring-2 invalid:ring-red-600" +
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
                <div className={"text-gray-600"}>
                  <p>{error}</p>
                </div>
              )}
              <div className="block w-[85%] pt-4">
                <SubmitButton
                  isDisabled={isDisabled}
                  className={"block w-full h-10 "}
                />
              </div>
              <p className="border-t sm:border-none py-4 sm:pt-3 text-sm self-center">
                Don't have an account ?{" "}
                <Link
                  to="/signup"
                  className="text-sky-500 hover:opacity-70 hover:text-blue-900"
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
