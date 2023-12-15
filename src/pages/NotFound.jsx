import { Link } from "react-router-dom";
import notfoundimg from "../../public/images/404.png";

const NotFound = () => {
  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl">Oops! 404 - Not Found</h2>
        <p>
          Looks like you took a wrong turn. This page seems to be hiding from
          us.
        </p>
        <p>Don't worry, our developers are on the case!</p>
      </div>
      <div>
        <img src={notfoundimg} alt="" />
      </div>
      <Link to="/" className="btn mt-10">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
