import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";
import useScript from "../../utils/useScript";
import { ButtonBase, Typography, Avatar } from "@material-ui/core";
import banner from "../../assets/bannerwhite.png";
import banner2 from "../../assets/sgtbanner.png";
import "../../giving/css/owl.theme.default.min.css";
import "../../giving/css/magnific-popup.css";
import "../../giving/css/aos.css";
import "../../giving/css/ionicons.min.css";
import "../../giving/css/bootstrap-datepicker.css";
import "../../giving/css/jquery.timepicker.css";
import "../../giving/css/flaticon.css";
import "../../giving/css/icomoon.css";
import "../../giving/css/style.css";
const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  useScript("https://code.jquery.com/jquery-3.4.1.slim.min.js");
  useScript(
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  );
  useScript(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
  );

  let location = useLocation();

  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/admin" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu,Roboto", fontSize: "1.5em" }}>
            Admin
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/donate" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu,Roboto", fontSize: "1.5em" }}>
            Donate
          </span>
        </Link>
      </li>

      <li className="nav-item active">
        <Link to="/dashboard" style={{ color: "black" }}>
          <i className="fas fa-user" />{" "}
          <span style={{ fontFamily: "Gaegu,Roboto", fontSize: "1.5em" }}>
            myDonations
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu,Roboto", fontSize: "1.5em" }}>
            About
          </span>
        </Link>
      </li>
      <div style={{ marginLeft: 36 }}>
        {user && (
          <img
            alt={`Avatar`}
            src={user.avatar}
            style={{ height: 30, width: 30, marginRight: 10 }}
          />
        )}
        <ButtonBase onClick={logout}>
          <li style={{ color: "black" }} className="nav-item active">
            <i className="fas fa-sign-out-alt" />{" "}
            <span
              style={{
                color: "black",
                fontFamily: "Gaegu,Roboto",
                fontSize: "1.5em",
              }}
            >
              Logout
            </span>
          </li>
        </ButtonBase>
      </div>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/donate" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu, Roboto", fontSize: "1.5em" }}>
            Donate
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu, Roboto", fontSize: "1.5em" }}>
            About
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/register" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span style={{ fontFamily: "Gaegu, Roboto", fontSize: "1.5em" }}>
            Register
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/login" style={{ color: "black" }}>
          <i className="far fa-sign-in-alt" />{" "}
          <span style={{ fontFamily: "Gaegu, Roboto", fontSize: "1.5em" }}>
            Login
          </span>
        </Link>
      </li>
    </ul>
  );
  const authLinksWhite = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/admin" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu,Roboto",
              fontSize: "1.5em",
            }}
          >
            Admin
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/donate" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu,Roboto",
              fontSize: "1.5em",
            }}
          >
            Donate
          </span>
        </Link>
      </li>

      <li className="nav-item active">
        <Link to="/dashboard" style={{ color: "black" }}>
          <i className="fas fa-user" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu,Roboto",
              fontSize: "1.5em",
            }}
          >
            myDonations
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu,Roboto",
              fontSize: "1.5em",
            }}
          >
            About
          </span>
        </Link>
      </li>

      <div style={{ marginLeft: 36 }}>
        {user && (
          <img
            alt={`Avatar`}
            src={user.avatar}
            style={{ height: 30, width: 30, marginRight: 10 }}
          />
        )}
        <ButtonBase onClick={logout}>
          <li style={{ color: "black" }} className="nav-item active">
            <i className="fas fa-sign-out-alt" />{" "}
            <span
              style={{
                color: "white",
                fontFamily: "Gaegu,Roboto",
                fontSize: "1.5em",
              }}
            >
              Logout
            </span>
          </li>
        </ButtonBase>
      </div>
    </ul>
  );

  const guestLinksWhite = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/donate" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu, Roboto",
              fontSize: "1.5em",
            }}
          >
            Donate
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu, Roboto",
              fontSize: "1.5em",
            }}
          >
            About
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/register" style={{ color: "black" }}>
          <i className="fas fa-registered" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu, Roboto",
              fontSize: "1.5em",
            }}
          >
            Register
          </span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/login" style={{ color: "black" }}>
          <i className="far fa-sign-in-alt" />{" "}
          <span
            style={{
              color: "white",
              fontFamily: "Gaegu, Roboto",
              fontSize: "1.5em",
            }}
          >
            Login
          </span>
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500|Gaegu:700"
        rel="stylesheet"
      />
      {location.pathname == "/" && (
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-dark"
          style={{
            border: 0,
            position: "absolute",
            width: "100%",
            background: "transparent, zIndex:100",
          }}
          id="ftco-navbar"
        >
          <div className="container">
            <Link to="/">
              {location.pathname == "/" && (
                <img src={banner} style={{ height: 40, width: 300 }} />
              )}
         
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div
              className="collapse navbar-collapse"
              id="ftco-nav"
              style={{ color: "white" }}
            >
              {isAuthenticated ? authLinksWhite : guestLinksWhite}
            </div>
          </div>
        </nav>
      )}
      {location.pathname != "/admin" && location.pathname != "/" && (
        <nav
          className="navbar navbar-expand-lg navbar-light ftco_navbar ftco-navbar-dark"
          style={{ border: 0 }}
          id="ftco-navbar"
        >
          <div className="container">
            <Link to="/">
       
                <img src={banner} style={{ height: 40, width: 300 }} />
        
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      )}
    </div>

    // <nav className='navbar bg-dark'>
    //   <h1>
    //     <Link to='/'>
    //       <i className='fas fa-edit' /> SOCIALGOODTODAY
    //     </Link>
    //   </h1>
    //   {!loading && (
    //     <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    //   )}
    // </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
