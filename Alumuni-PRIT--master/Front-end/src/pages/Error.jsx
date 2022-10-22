import { Link } from "react-router-dom";
import errorSvg from "../assets/pageNotFound.svg";

const Error = () => {
  return (
    <main className="h-[calc(100vh - 1rem)]">
      <div className="h-[80%] w-full flex justify-center py-10">
        <object data={errorSvg} alt="" className="self-center" height="350vh" />
      </div>
      <div className="text-xl text-center">
        <p>
          The webpage you requested is currently down or don't exist. Try
          checking the URL for possible errors
        </p>
        <p>
          Click{" "}
          <Link to="/" className="hover:text-blue-600">
            here
          </Link>{" "}
          to go to home page
        </p>
      </div>
    </main>
  );
};

export default Error;
