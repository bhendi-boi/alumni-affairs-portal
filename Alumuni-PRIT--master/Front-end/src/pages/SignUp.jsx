import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components and styles
import PhoneInput from "../components/PhoneInput";
import SubmitButton from "../components/SubmitButton";
import OtherLinks from "../components/OtherLinks";
// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import iiitdmLogo from "../assets/iiitdm.png";
import ALUMNILOGO from "../assets/oldoldlogo_whiteishhhh.png";
//
const SignUp = () => {
  // state
  const navigate = useNavigate();

  const [formData, setFormData] = useLocalStorageState("signInData", {
    username: "",
    password: "",
    email: "",
    branch: "",
    linkedInProfileName: "",
    rollNo: "",
    phoneNumber: null,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(!true);
  const [phoneNumber, setPhoneNumber] = useState("");

  // variables

  const inputClassName =
    "inline w-[85%] mx-auto sm:mx-4 my-2 px-2 py-2 bg-transparent border-b-2 outline-none border-neutral-100 text-base-100  transition duration-500 hover:border-blue-600 focus:border-blue-600 invalid:border-red-600";

  // effects
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phoneNumber: phoneNumber.toString() }));
  }, [phoneNumber]);

  // helper functions
  const validateData = () => {
    if (formData.password === "") {
      setError("Enter a password first");
    } else if (formData.password.length < 8) {
      setConfirmPassword("");
      setError("Password too short");
    } else if (formData.password !== confirmPassword) {
      setError("Passwords donot match");
      setConfirmPassword("");
      setFormData((prev) => ({ ...prev, password: "" }));
    } else {
      setError("");
    }
  };

  // event handlers
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setFormData((prev) => ({ ...prev, username: `${e.target.value}` }));
    } else if (e.target.name === "rollNo") {
      setFormData((prev) => ({ ...prev, rollNo: `${e.target.value}` }));
    } else if (e.target.name === "emailId") {
      setFormData((prev) => ({ ...prev, email: `${e.target.value}` }));
    } else if (e.target.name === "linkedInProfileName") {
      setFormData((prev) => ({
        ...prev,
        linkedInProfileName: `${e.target.value}`,
      }));
    } else if (e.target.name === "password") {
      setFormData((prev) => ({ ...prev, password: `${e.target.value}` }));
    }
  };
  const handleBranch = (e) => {
    if (e.target.name === "electronics") {
      setFormData((prev) => ({ ...prev, branch: "ec" }));
    } else if (e.target.name === "computers") {
      setFormData((prev) => ({ ...prev, branch: "cs" }));
    } else {
      setFormData((prev) => ({ ...prev, branch: "me" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(false);
    console.log(error);
    validateData();
    if (error == "") {
      // todo : send data to backend
      try {
        const url = "http://localhost:8001/SignIn";
        console.log("sending following data", JSON.stringify(formData));
        const { data: res } = await axios.post(url, formData);
        console.log(res.message);
        navigate("/login");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          console.log(error.response.data.message);
        }
      }
    }
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-base-content">
        <section className="w-full h-full sm:w-[90%]  md:w-[80%] sm:h-[90%]  sm:border-2 sm:shadow-2xl flex flex-col items-center sm:flex-row sm:rounded-2xl overflow-hidden">
          <picture className="h-full sm:w-[40%] flex p-10 border-r-2">
            <img
              src={ALUMNILOGO}
              alt="alumni portal logo"
              className="self-center w-full scale-75 sm:scale-100"
            />
          </picture>
          <section className="w-full sm:w-[60%] flex flex-col justify-between text-slate-50">
            <p className="self-center my-2 text-2xl">Tell us about your self</p>
            <form
              className="grid grid-cols-1 grid-rows-9 sm:grid-cols-2"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                <input
                  onChange={handleChange}
                  value={formData.username}
                  type="text"
                  name="username"
                  placeholder="Name*"
                  required
                  className={inputClassName}
                />
              </div>
              <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                <input
                  onChange={handleChange}
                  value={formData.rollNo}
                  type="text"
                  name="rollNo"
                  placeholder="Roll no"
                  className={inputClassName}
                />
              </div>
              <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                <input
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  name="emailId"
                  placeholder="Email ID*"
                  required
                  className={inputClassName}
                />
              </div>

              <div className=" w-[85%] sm:w-[90%]  mx-auto sm:mx-2  flex justify-center items-center col-span-2 sm:col-span-1">
                <PhoneInput
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                />
              </div>
              <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                <input
                  onChange={handleChange}
                  value={formData.linkedInProfileName}
                  type="text"
                  name="linkedInProfileName"
                  placeholder="LinkedIn username"
                  className={inputClassName}
                />
              </div>
              <div className="w-[85%] py-4 col-span-2 mx-auto sm:col-span-1 flex justify-around items-center">
                <button
                  type="button"
                  name="electronics"
                  onClick={handleBranch}
                  className="bg-base-100 text-gray-900 font-medium px-4 py-2 rounded-md text-lg"
                >
                  EC
                </button>
                <button
                  type="button"
                  name="computers"
                  onClick={handleBranch}
                  className="bg-base-100 text-gray-900 font-medium px-4 py-2 rounded-md text-lg"
                >
                  CS
                </button>
                <button
                  type="button"
                  onClick={handleBranch}
                  name="mechanical"
                  className="bg-base-100 text-gray-900 font-medium px-4 py-2 rounded-md text-lg"
                >
                  ME
                </button>
              </div>
              <div className="flex items-center justify-center col-span-2">
                <input
                  onChange={handleChange}
                  value={formData.password}
                  type="password"
                  name="password"
                  placeholder="Create password*"
                  required
                  className={inputClassName}
                />
              </div>
              <div className="flex items-center justify-center col-span-2">
                <input
                  onChange={(e) => {
                    setConfirmPassword(`${e.target.value}`);
                  }}
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm password*"
                  required
                  className={inputClassName}
                />
              </div>
              {error && (
                <div className="flex items-center justify-start px-4 mx-6">
                  <p className="text-base text-error">{error}</p>
                </div>
              )}
              <SubmitButton
                className={"col-span-2 w-3/4  mx-auto my-2"}
                isDisabled={isDisabled}
                text={"sign up"}
              />
            </form>
            <div className="flex items-center justify-center mb-4 text-base">
              <p>
                Already a member?{" "}
                <Link
                  to="/login"
                  className="hover:underline focus-within:underline text-blue-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </section>
        </section>
      </main>
      <OtherLinks />
    </>
  );
};

export default SignUp;
