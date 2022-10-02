import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="mainnav">
        <div className="nav">
          <li ><Link to="/task1">Task1</Link></li>
          <li><Link to="/task2">Task2</Link></li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
