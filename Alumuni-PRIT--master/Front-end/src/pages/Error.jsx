import { Link } from "react-router-dom";
import errorSvg from "../assets/pageNotFound.svg";

const Error = () => {
  return (
    <main className="max-h-[calc(100vh-4rem)] bg-base-content text-base-100 relative">
      <div className="flex justify-center items-center px-10 pt-10">
        <img src={errorSvg} alt="404 error" className="sm:w-[50%]" />
      </div>
      <div className="text-2xl text-center py-10 md:py-4">
        <p>
          Click{" "}
          <Link to="/" className="text-sky-600 hover:text-blue-700">
            here
          </Link>
          {"  "}
          to go to home page
        </p>
      </div>
    </main>
  );
};

export default Error;
