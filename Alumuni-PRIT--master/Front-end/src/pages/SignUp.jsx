import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components and styles
import PhoneInput from "../components/PhoneInput";
import SubmitButton from "../components/SubmitButton";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

// hooks
import useLocalStorageState from "../hooks/useLocalStorageState";
import iiitdmLogo from "../assets/iiitdm.png";
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
    "inline w-[85%] mx-auto sm:mx-4 my-2 px-2 py-2 bg-transparent border-b-2 outline-none border-slate-400 text-gray-600  transition duration-500 hover:border-blue-600 focus:border-blue-600 invalid:border-red-600";

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
    } else if (e.target.name === "branch") {
      setFormData((prev) => ({ ...prev, branch: `${e.target.value}` }));
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
    <main className="min-h-[calc(100vh-4rem)] flex justify-center items-center">
      <section className="w-full h-full sm:w-[90%] bg-base-100 md:w-[80%] sm:h-[90%]  sm:border-2 border-[#4e54c8] sm:shadow-2xl flex flex-col items-center sm:flex-row sm:rounded-2xl">
        <section className="h-full sm:w-[40%] flex p-10">
          <img
            src={iiitdmLogo}
            alt="alumni portal logo"
            className="self-center w-full scale-75 sm:scale-100"
          />
        </section>
        <section className="w-full sm:w-[60%] flex flex-col justify-between bg-base-100">
          <p className="self-center my-2 text-2xl text-black">
            Tell us about your self
          </p>
          <form
            className="grid content-center grid-cols-1 grid-rows-9 sm:grid-cols-2"
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
            {/* <div className="col-span-2 mx-auto sm:col-span-1"> */}
            {/* <FormControl className="px-2 py-3">
                <InputLabel htmlFor="branch" className="mt-2">
                  Branch
                </InputLabel>
                <NativeSelect onChange={handleChange} name="branch" id="branch">
                  <option value={"ec"}>Electronics</option>
                  <option value={"cs"}>Computer Science</option>
                  <option value={"me"}>Mechanical</option>
                  <option value={"sm"}>Smart Manufacturing</option>
                </NativeSelect>
              </FormControl> */}
            <div className="w-[85%] py-4 form-control col-span-2 mx-auto sm:col-span-1">
              <div className="w-full input-group">
                <select className="w-full pb-2 border-b-2 border-slate-400 focus:outline-none focus:border-blue-600">
                  <option selected>Electronics</option>
                  <option>Computers</option>
                  <option>Mechanical</option>
                </select>
              </div>
            </div>
            {/* </div> */}
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
              className={"block col-span-2 mx-4 my-2 p-2 rounded-md"}
              isDisabled={isDisabled}
              text={"sign up"}
            />
          </form>
          <div className="flex items-center justify-center mb-4 text-xl ">
            <p>
              Already a member?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-500 cursor-pointer hover:text-blue-600"
              >
                Signin
              </Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SignUp;
