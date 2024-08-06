import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  var currentUrl = window.location.href;
  // console.log(currentUrl);
  
  var substrings = currentUrl.split("/"); // Splits the string at each comma
  const url =substrings[3]; 

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav  className={ (url==="login" || url==="register") ? "navbarHide" : "navbarShow"}> 
      <div className="container">
        <div className="flex justify-center cursor-pointer">
        <div className="logo">
          <img style={{ width: '120px' }} src="/JobUp1.png" alt="logo" />
          
        </div>
          <h1 className="mt-5  font-bold text-2xl text-gray-300">JobUp</h1>
        </div>
       
        
        <ul className={!show ? "menu" : "show-menu menu"}>
          {isAuthorized && <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              Home
            </Link>
          </li>}
          {
            isAuthorized && <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              All Jobs
            </Link>
          </li>
          }
          
          <li>
           { isAuthorized && <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "Applicant's Applications"
                : "My Applications"}
            </Link> } 
          </li>
          {user && user.role === "Employer" && isAuthorized ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  Post New Job
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  View Your Job
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          {isAuthorized && <button onClick={handleLogout}>Logout</button>}
          {!isAuthorized && <button onClick={()=>{navigateTo("/login")}}>Login</button>}

        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
