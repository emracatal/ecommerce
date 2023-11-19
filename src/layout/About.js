import React from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import TeamMemberCard from "../components/TeamMemberCard";
import ClientsBGWhite from "../components/ClientsBGWhite";
import testimonials from "../assets/testimonials.png";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

export default function About() {
  const members = [
    { id: 1, name: "blog1", price: 19.99 },
    { id: 2, name: "blog2", price: 19.99 },
    { id: 3, name: "blog3", price: 39.99 },
  ];
  return (
    <>
      {/* header light */}
      <HeaderHome />

      {/* ABOUT US body */}
      <div className="  max-w-[1050px] mx-auto min-h-[545px]">
        <div className="container ">
          <div className="relative items-center mobile:flex mobile:flex-wrap">
            <div className="container text-black flex flex-col justify-center gap-4 pt-[15%] max-w-[600px] mobile:text-center mobile:px-10">
              <h5 className="font-bold">ABOUT COMPANY</h5>
              <h1 className="font-bold">ABOUT US</h1>
              <h4 className="">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="text-white bg-turku rounded-md text-lg font-bold px-5 py-2 ">
                  Get Quote Now
                </button>
              </div>
            </div>
            <div className="">
              <img
                className="absolute w-[100%] top-0 left-0 -z-10 mobile:hidden"
                src={about1}
              ></img>
            </div>
            <div className="hidden mobile:flex mobile:justify-center mobile:m-10">
              <img className="" src={about2}></img>
            </div>
          </div>
        </div>
      </div>

      {/* problems trying yazan alan */}
      <div className="flex justify-center ">
        <div className="container  flex flex-row justify-between items-center max-w-[1050px] min-h-[188px] px-6 gap-10 mobile:flex mobile:flex-wrap mobile:justify-center mobile:py-10">
          <div className="flex flex-col gap-6 w-[40%]">
            <h6 className="text-danger">Problems trying</h6>
            <h3 className="font-bold">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <h6 className="text-lightgray w-[60%]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h6>
        </div>
      </div>

      {/* 15K yazan alan */}
      <div className="flex justify-center ">
        <div className="container  flex flex-row justify-between items-center max-w-[1050px] min-h-[264px] gap-7 mobile:flex mobile:flex-col mobile:py-10">
          <div className="max-w-[240px]">
            <h1 className="font-bold">15K</h1>
            <h5 className="text-lightgray">Happy Customers</h5>
          </div>
          <div className="max-w-[240px]">
            <h1 className="font-bold">150K</h1>
            <h5 className="text-lightgray">Happy Customers</h5>
          </div>
          <div className="max-w-[240px]">
            <h1 className="font-bold">15</h1>
            <h5 className="text-lightgray">Happy Customers</h5>
          </div>
          <div className="max-w-[240px]">
            <h1 className="font-bold">100+</h1>
            <h5 className="text-lightgray">Happy Customers</h5>
          </div>
        </div>
      </div>

      {/* video area */}
      <div className="">
        <div className="container max-w-[1050px] flex justify-center items-center mx-auto ">
          <iframe
            className="rounded-2xl flex items-center justify-center w-[989px] h-[540px] mobile:w-[307px] mobile:h-[316px] mobile:m-14"
            src="https://www.youtube.com/embed/2nEzfa43VF8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* meet our team */}
      <div className="flex justify-center  ">
        <div className="container flex flex-col max-w-[1050px] min-h-[595px] py-20 gap-20">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold">Meet Our Team</h2>
            <h6 className="text-lightgray mobile:m-7 mobile:text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </h6>
          </div>
          <div className="team-container flex items-center justify-center max-w-[1050px] mx-auto">
            <div className="flex flex-row flex-wrap max-w-[1050px] gap-10 justify-center items-center">
              {members.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*big companies are here */}
      <div className="flex justify-center w-full">
        <div className="container flex flex-col max-w-[1050px] min-h-[319px] py-10 gap-6">
          <div className="flex flex-col items-center gap-7">
            <h2 className="font-bold mobile:text-center">
              Big Companies Are Here
            </h2>
            <h6 className="text-lightgray mobile:text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </h6>
          </div>
          <ClientsBGWhite />
        </div>
      </div>

      {/*testimonials */}
      <div className="bg-hovercolor">
        <div className="max-w-[1050px] min-h-[636px] flex mx-auto mobile:text-center mobile:min-h-[388px] ">
          <div className="container text-white flex flex-col justify-center gap-4 pt-[15%] max-w-[600px] mobile:p-0 mobile:m-12 mobile:gap-6 ">
            <h5 className="font-bold">WORK WITH US</h5>
            <h2 className="font-bold">Now Let’s grow Yours</h2>
            <h6 className="">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </h6>
            <div>
              <button className="text-white border border-white rounded-md text-sm font-bold px-5 py-2 ">
                Button
              </button>
            </div>
          </div>
          <img src={testimonials} className="mobile:hidden"></img>
        </div>
      </div>

      {/*footer */}
      <Footer />
    </>
  );
}
