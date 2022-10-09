import { useState } from "react";
import { Link } from "react-router-dom";

// components
import SubmitButton from "../components/SubmitButton";

// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import alumniLogo from "../assets/aa_logo.png";

const Login = () => {
  const [data, setData] = useLocalStorageState("loginData", {
    email: null,
    password: "",
  });
  const error = useLocalStorageState("loginError", "password donot match");
  const [isDisabled, setIsDisabled] = useState(true);

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
    validateData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    // ? send a post request to backend
  };

  const handleForgotPassword = () => {
    // ? backend
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white w-full flex justify-center items-center overflow-hidden">
      <div className="w-full h-full sm:w-[80%] sm:h-[80%] flex flex-col items-center justify-center">
        <section className="h-full w-full sm:h-[90%] sm:w-[80%] flex flex-col sm:flex-row  sm:shadow-xl sm:rounded-2xl">
          {/* image-container */}
          <div className="w-full h-full sm:w-[40%] flex items-center p-5">
            <img src={alumniLogo} alt="alumni-logo" className="block" />
          </div>
          <div className="w-full sm:w-[60%] h-full">
            <form
              className="space-y-4 w-full flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <p className="self-center pt-4 md:pt-6 lg:pt-8">
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
                  <label htmlFor="password" className="text-gray-700">
                    Password
                  </label>
                  <button
                    onClick={handleForgotPassword}
                    className="p-2 sm:mr-2"
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
