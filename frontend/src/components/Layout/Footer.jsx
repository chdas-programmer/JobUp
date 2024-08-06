// import React, { useContext } from "react";

// import { Link } from "react-router-dom";
// import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";

// const Footer = () => {
//   const { isAuthorized } = useContext(Context);
//   return (
//     <footer className={isAuthorized ? "footerShow" : "footerHide"}>
//       <div>&copy; All Rights Reserved By CodeWithZeeshu.</div>
//       <div>
//         <Link to={"https://www.facebook.com/profile.php?id=100030535123397"} target="_blank">
//           <FaFacebookF />
//         </Link>
//         <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
//           <FaYoutube />
//         </Link>
//         <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
//           <FaLinkedin />
//         </Link>
//         <Link to={"https://www.instagram.com/z_4_zeeshuuu/"} target="_blank">
//           <RiInstagramFill />
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import {Link} from "react-router-dom";


import footerLogo from "../../../public/JobUp1.png";
import Banner from "../../../public/heroS.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const About = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const support = [
  {
    title: "Talk to us",
    link: "/#talk-to-us",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Help Center",
    link: "/#help-center",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy-policy",
  },
];



const Footer = () => {

  
  // const { isAuthorized } = useContext(Context);
  const [ToShow,SetToShow]=useState(true)
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);

  let url=""
  useEffect(()=>{
    var currentUrl = window.location.href;
  // console.log(currentUrl);
  
  var substrings = currentUrl.split("/"); // Splits the string at each comma
  url =substrings[3];
  console.log(url)
  if(url!=="login"  || url!=="register" ) SetToShow(false)


  },[url])
  return (
    <>
    <div  className="text-white bg-blue-900 h-[600px]">
    <div className="container">
      <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
        {/* company details */}
        <div className="py-8 px-4">
          <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            <img src={footerLogo} alt="" className="max-w-[50px]" />
            JobUp
          </h1>
          <p>
          Welcome to our job portal, your gateway to a world of career opportunities. Whether you're a seasoned professional or just starting out, we're here to connect you with the perfect job. Our platform offers a seamless experience, tailored to match your skills and aspirations. Let us be your partner in success as you navigate your career path with confidence.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                About us
              </h1>
              <ul className="flex flex-col gap-3">
                {About.map((link) => (
                  <li
                    className="cursor-pointer  hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold  sm:text-left text-justify mb-3">
                Support
              </h1>
              <ul className="flex flex-col gap-3">
                {support.map((link) => (
                  <li
                    className="cursor-pointer  hover:translate-x-2 duration-300 "
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* social links */}

          <div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-black" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-black" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-black" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>West Bengal,India</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p >+91 234234343</p>
              </div>
              <div className="flex items-center gap-3 mt-3 hover:underline underline-offset-4">
                
              </div>
            </div>
          </div>

          <h1 className="mt-20 ml-20 cursor-pointer hover:underline">All Copyright © 2024 Reserved</h1>
        </div>
      </div>
    </div>
  </div>
    </>
   
  );
};

export default Footer;

