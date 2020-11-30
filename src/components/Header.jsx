import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../img/logo.png'
import Hero from './Hero'
import './sidebar.css'


function Header() {
  let [sidebar, setSidebar] = useState(false)
  let [navlock, setNavLock] = useState(false)
  let listenToScroll = () => {
    if (window.pageYOffset > 0) {
      setNavLock(true)
    } else {
      setNavLock(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    }
  }, [])
  let location = useLocation()
  if (
    location.pathname === "/" ||
    location.pathname === "/board" ||
    location.pathname === "/history" ||
    location.pathname === "/statements" ||
    location.pathname === "/founderbio" ||
    location.pathname === "/bye-laws" ||
    location.pathname === "/education" ||
    location.pathname === "/donate" ||
    location.pathname === "/beneficiaries"
  ) {
    return (
      <header
        id={location.pathname !== "/" ? "about-header" : ""}
        className="d-flex align-items-center"
      >
        <div className="container">
          <nav
            onScrollCapture={() => {
              console.log("window scrolling");
            }}
            className={
              location.pathname === "/"
                ? navlock
                  ? "navbar navbar-expand-md mt-4 navbar-dark fixed-top nav-white"
                  : "navbar navbar-expand-md mt-4 navbar-dark fixed-top"
                : "navbar navbar-expand-md mt-0 navbar-dark fixed-top"
            }
          >
            <div className="container">
              <Link className="navbar-brand font-weight-bold" to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  setSidebar(!sidebar);
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="sidebar">
                <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                     </Link>
                  </li>
                  <li className="dropdown nav-item">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About Us
                     </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="nav-link" to="/history">
                        History
                       </Link>
                      <Link className="nav-link" to="/statements">
                        Mission & Vision
                       </Link>
                      <Link className="nav-link" to="/board">
                        Board Members
                       </Link>
                      <Link className="nav-link" to="report">
                        Annual Report
                       </Link>
                      <Link className="nav-link" to="/bye-laws">
                        Bye-laws & Eligibility
                       </Link>
                      <Link className="nav-link" to="/beneficiaries">
                        Beneficiaries
                       </Link>
                    </div>
                  </li>
                  <li className="dropdown nav-item">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Focus Areas
                     </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="nav-link" to="/education">
                        Education
                       </Link>
                      <Link className="nav-link" to="/skills">
                        Skills Development
                       </Link>
                    </div>
                  </li>

                  <li className="dropdown nav-item">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Media
                     </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="nav-link" to="/news">
                        News
                       </Link>
                      <Link className="nav-link" to="/gallery">
                        Gallery
                       </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                     </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-uppercase ml-2 donate-btn btn border-0 font-weight-bold text-white"
                      to="/donate"
                    >
                      Donate
                     </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            onClick={() => {
              setSidebar(false);
            }}
            className={sidebar ? "sidebar-overlay overlay" : "sidebar-overlay"}
          ></div>

          <div
            className={
              sidebar ? "sidebar-pane sidebar-pane-show" : "sidebar-pane"
            }
          >
            <div className="side-menu-container">
              <ul className="nav navbar-nav">
                <li
                  className="nav-item"
                  onClick={() => {
                    setSidebar(false);
                  }}
                >
                  <NavLink
                    className="nav-link  px-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                   </NavLink>
                </li>

                <li
                  className="nav-item px-3 py-1 panel panel-default"
                  id="dropdown"
                >
                  <a
                    data-toggle="collapse"
                    href="#dropdown-lvl1"
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                  >
                    About Us
                   </a>
                  <div id="dropdown-lvl1" className="panel-collapse collapse pl-2">
                    <div className="panel-body">
                      <ul
                        className="nav navbar-nav"
                        onClick={() => {
                          setSidebar(false);
                        }}
                      >
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/history"
                        >
                          History
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/statements"
                        >
                          Mission & Vision
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/board"
                        >
                          Board Members
                         </NavLink>

                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/reports"
                        >
                          Annual Reports
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/bye-laws"
                        >
                          Bye-laws & Eligibility
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/beneficiaries"
                        >
                          Beneficiaries
                         </NavLink>
                      </ul>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item px-3 py-1 panel panel-default"
                  id="dropdown"
                >
                  <a
                    data-toggle="collapse"
                    href="#dropdown-lvl2"
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                  >
                    Focus Areas
                     <span className="caret"></span>
                  </a>
                  <div id="dropdown-lvl2" className="panel-collapse collapse pl-2">
                    <div className="panel-body">
                      <ul
                        className="nav navbar-nav"
                        onClick={() => {
                          setSidebar(false);
                        }}
                      >
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/education"
                        >
                          Education
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/skills"
                        >
                          Skills & Development
                         </NavLink>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="nav-item px-3 py-1 panel panel-default"
                  id="dropdown"
                >
                  <a
                    data-toggle="collapse"
                    href="#dropdown-lvl3"
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                  >
                    Media
                     <span className="caret"></span>
                  </a>
                  <div id="dropdown-lvl3" className="panel-collapse collapse pl-2">
                    <div className="panel-body">
                      <ul
                        className="nav navbar-nav"
                        onClick={() => {
                          setSidebar(false);
                        }}
                      >
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/news"
                        >
                          News
                         </NavLink>
                        <NavLink
                          activeClassName="active-nav"
                          className="nav-link  px-3 bg-light font-weight-light"
                          aria-current="page"
                          to="/gallery"
                        >
                          Gallery
                         </NavLink>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item  px-3 py-1">
                  <NavLink
                    className="nav-link text-uppercase ml-2 donate-btn btn border-0 font-weight-bold text-white"
                    to="/donate"
                  >
                    Donate
                   </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {location.pathname === "/" && <Hero />}
        </div>
      </header>
    );
  }
  return null

}

export default Header
