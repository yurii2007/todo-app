import { Link } from "react-router-dom";

const GetStartedBtn = () => {
  return (
    <Link to="/todos" className="btn-primary mt-4">
      Get Started
    </Link>
  );
};

export default GetStartedBtn;
