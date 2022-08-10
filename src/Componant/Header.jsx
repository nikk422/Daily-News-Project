import "./header.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="nav flex">
      <img src="https://previews.123rf.com/images/valentint/valentint1605/valentint160506798/57147228-daily-news-icon-internet-button-on-white-background-.jpg" className="nav-img" alt="logo"/>
      <Link to="/">
        <h2 className="title-heading navTitle">Daily-News</h2>
      </Link>
    </header>
  );
};

export default Navbar;
