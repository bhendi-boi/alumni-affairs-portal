import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//
const SignUp = () => {
  // state

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    branch: "",
    linkedInProfileName: "",
    rollNo: "",
    phoneNumber: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  // variables
  const whileTap = isDisabled ? {} : { scale: 0.96 };
  const whileHover = isDisabled ? {} : { scale: 1.02 };

  // helper functions
  const validateData = () => {
    if (formData.password === "") {
      setError("Enter a password first");
    } else if (formData.password.length < 8) {
      setConfirmPassword("");
      setError("Password too short");
    } else if (formData.password !== confirmPassword) {
      setError("Passwords donot match");
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
    } else if (e.target.name === "branch") {
      setFormData((prev) => ({ ...prev, branch: `${e.target.value}` }));
    } else if (e.target.name === "phoneNumber") {
      setFormData((prev) => ({ ...prev, phoneNumber: `${e.target.value}` }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(false);
    console.log(error);
    validateData();
    if (error == "") {
      // todo : send data to backend
      console.log("I'm in");
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
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center ">
      <div
        className="w-[100%] sm:w-[80%] sm:h-[80%] bg-yellow-200 border-red-500 border-2 flex flex-col  sm:flex-row
      
      "
      >
        <div className="w-[100%] h-20 sm:h-[100%] sm:w-[50%] flex sm:justify-center sm:items-center border-black border-r-2 ">
          <img src="" alt="alumni portal logo" className="rounded" />
        </div>
        <div className=" w-[100%]  sm:w-[60%]  bg-white">
          <h2>Create your account by filling the form below</h2>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-1 grid-rows-9 sm:grid-cols-2 mt-12"
          >
            <input
              onChange={handleChange}
              value={formData.username}
              type="text"
              name="username"
              placeholder="Name*"
              required
              className="inline w-[85%] col-span-2 sm:col-span-1 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />

            <input
              onChange={handleChange}
              value={formData.rollNo}
              type="text"
              name="rollNo"
              placeholder="Roll no"
              className="inline w-[85%] col-span-2 sm:col-span-1 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="emailId"
              placeholder="Email ID*"
              required
              className="inline w-[85%] col-span-2 sm:col-span-1 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />
            <input
              onChange={handleChange}
              value={formData.phoneNumber}
              type="phone number"
              name="phoneNumber"
              placeholder="Phone number"
              className="inline w-[85%] col-span-2 sm:col-span-1 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400 "
            />

            <input
              onChange={handleChange}
              value={formData.linkedInProfileName}
              type="text"
              name="linkedInProfileName"
              placeholder="LinkedIn username"
              className="inline w-[85%] col-span-2 sm:col-span-1 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />
            <div className="w-[85%]  col-span-2 sm:col-span-1 mx-auto sm:mx-4  px-2 py-2 ">
              <FormControl>
                <InputLabel htmlFor="branch">Branch</InputLabel>
                <NativeSelect onChange={handleChange} name="branch" id="branch">
                  <option value={"EC"}>Electonics</option>
                  <option value={"CS"}>Computer Science</option>
                  <option value={"CSAI"}>
                    Computer Science with major in AI
                  </option>
                  <option value={"ME"}>Mechanical</option>
                  <option value={"SM"}>Smart Manufacturing</option>
                </NativeSelect>
              </FormControl>
            </div>

            <input
              onChange={handleChange}
              value={formData.password}
              type="text"
              name="password"
              placeholder="Create password*"
              required
              className="col-span-2 mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />
            <input
              onChange={(e) => {
                setConfirmPassword(`${e.target.value}`);
              }}
              type="text"
              name="confirmPassword"
              placeholder="Confirm password*"
              required
              className="col-span-2 mx-auto sm:mx-4 my-2 px-2 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
            />
            {error && <p>{error}</p>}

            <motion.button
              type="submit"
              disabled={isDisabled}
              className={
                "block col-span-2 mx-4 my-2 px-2 py-2 rounded-md bord " +
                (!isDisabled
                  ? "bg-green-600 border-green-600 text-white"
                  : " border-green-300  text-white  bg-green-300")
              }
              whileHover={whileHover}
              whileTap={whileTap}
            >
              Submit
            </motion.button>
          </form>
          <p className="ml-36">
            Already a member?{" "}
            <Link to="/login" className="underline cursor-pointer">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
