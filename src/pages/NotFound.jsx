import { Link } from "react-router-dom";
import notfoundimg from "/images/404.webp";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="mb-3 text-4xl font-bold">Oops! 404 - Not Found</h2>
        <p>
          Looks like you took a wrong turn. This page seems to be hiding from
          us.
        </p>
        <p>Don't worry, our developers are on the case!</p>
      </div>
      <div>
        <img src={notfoundimg} alt="" className="mx-auto w-2/3" />
      </div>
      <Link to="/" className="btn mt-10">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
