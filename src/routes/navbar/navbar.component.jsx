import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import crwnlogo from "../../assets/crown.svg";

export default function NavBar() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {" "}
          <img className="logo" src={crwnlogo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">SIGN IN</Link>
          {/* <li>CART</li> */}
        </div>
      </div>
    </>
  );
}
