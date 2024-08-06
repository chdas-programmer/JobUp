// import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

// const HeroSection = () => {
//   const details = [
//     {
//       id: 1,
//       title: "1,23,441",
//       subTitle: "Live Job",
//       icon: <FaSuitcase />,
//     },
//     {
//       id: 2,
//       title: "91220",
//       subTitle: "Companies",
//       icon: <FaBuilding />,
//     },
//     {
//       id: 3,
//       title: "2,34,200",
//       subTitle: "Job Seekers",
//       icon: <FaUsers />,
//     },
//     {
//       id: 4,
//       title: "1,03,761",
//       subTitle: "Employers",
//       icon: <FaUserPlus />,
//     },
//   ];
//   return (
//     <>
//       <div className="heroSection">
//         <div className="container">
//           <div className="title">
//             <h1>Find a job that suits</h1>
//             <h1>your interests and skills</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//               voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
//               facere mollitia!
//             </p>
//           </div>
//           <div className="image">
//             <img src="/heroS.jpg" alt="hero" />
//           </div>
//         </div>
//         {/* <div className="details">
//           {details.map((element) => {
//             return (
//               <div className="card" key={element.id}>
//                 <div className="icon">{element.icon}</div>
//                 <div className="content">
//                   <p>{element.title}</p>
//                   <p>{element.subTitle}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default HeroSection;


import React from "react";
import Image1 from "../../../public/banner1.png";
import Image2 from "../../../public/banner2.png";
import Image3 from "../../../public/banner4.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Discover Your Next Career Move Today!",
    description:
      "Unlock a wealth of opportunities and find your perfect fit with our intuitive job portal. Start your journey to professional success now!",
  },
  {
    id: 2,
    img: Image2,
    title: "Start Your Journey to Success Here!",
    description:
      "Explore endless possibilities and take the first step towards achieving your career goals with our comprehensive job portal. Your success story begins now!",
  },
  {
    id: 3,
    img: Image3,
    title: "Find Your Dream Job with Us!",
    description:
      "Our job portal offers personalized matches and extensive resources to guide you towards your ideal career path. Let us help you turn your dreams into reality!",
  },
];

const HeroSection = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


  

  return (
    <div className="relative overflow-hidden min-h-[550px]  sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      {/* <div className="h-[500px] w-[500px] mr-[1200px] mt-[200px]  bg-primary/80 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div> */}
      {/* <div className="h-[700px] w-[700px] bg-primary/80 absolute  -buttom-1/2 top-[400px]  -left-32 rounded-3xl rotate-45 z[8]"></div> */}
      {/* <div className="h-[500px] w-[500px] bg-primary/80 absolute  top-[550px]  mr-[300px] mb-[200px] right-0 -buttom-3 rounded-3xl rotate-45 z[8]"></div> */}
      

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={ImageList.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-700 "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm font-bold mt-5"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full  mt-6"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[1500px] h-[1500px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-200 object-contain mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default HeroSection;

