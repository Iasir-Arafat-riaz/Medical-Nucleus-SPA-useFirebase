import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink,useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useFirebase } from "../../hooks/useFirebase";
import "./Header.css"

const Header = () => {
  const {userSignOut,user,setError}= useFirebase()

  //useHistory for sign in button
  const history = useHistory()
  const headerLoginButton =()=>{
    
    history.push("/login")
    // setError("")
  }
  return (
    <div className="row">
     <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="text-center"
      >
        <Container>
          <img src="https://i.ibb.co/cDvSmV3/logggo.png" alt="" />
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Navbar.Brand>
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="/home"
                  className="header-link"
                >
                  Home
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="doctors"
                  className="header-link"
                >
                  Doctors
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
             
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="archive"
                  className="header-link"
                >
                  Archive
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
               
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  to="emergency"
                  className="header-link"
                >
                  Emergency 24/7
                </NavLink>
              </Navbar.Brand>
              <NavDropdown title="More Info" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="./covid"
                    className="header-info"
                  >
                    Cov-19-Vax
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="icu"
                    className="header-info"
                  >
                    ICU/CCU
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    to="about"
                    className="header-info"
                  >
                    ABOUT US
                  </NavLink>
                 
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
         
         {user.email&&  <span className="text-light mx-1">{user?.displayName}</span>}
         {user.email? <button onClick={userSignOut} className="btn btn-danger">Logout</button> : <Link to="/login"><button onClick={headerLoginButton} className="btn btn-success">Login</button></Link>}
          
         
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


//--------------------THANKS TO YOU FOR YOUR TIME AND SUPPORT---------------