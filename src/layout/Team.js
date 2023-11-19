import React from "react";
import { Link } from "react-router-dom";
import teamhero1 from "../assets/teamhero1.png";
import teamhero1a from "../assets/teamhero1a.png";

import teamhero2 from "../assets/teamhero2.png";
import teamhero2a from "../assets/teamhero2a.png";

import teamhero3 from "../assets/teamhero3.png";
import teamhero3a from "../assets/teamhero3a.png";

import teamhero4 from "../assets/teamhero4.png";
import teamhero4a from "../assets/teamhero4a.png";

import teamhero5 from "../assets/teamhero5.png";
import teamhero5a from "../assets/teamhero5a.png";

import TeamMemberCard from "../components/TeamMemberCard";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

export default function Team() {
  const members = [
    { id: 1, name: "blog1", price: 19.99 },
    { id: 2, name: "blog2", price: 19.99 },
    { id: 3, name: "blog3", price: 39.99 },
    { id: 4, name: "blog4", price: 39.99 },
    { id: 5, name: "blog5", price: 39.99 },
    { id: 6, name: "blog6", price: 39.99 },
    { id: 7, name: "blog7", price: 39.99 },
    { id: 8, name: "blog8", price: 39.99 },
    { id: 9, name: "blog9", price: 39.99 },
  ];
  return (
    <>
      {/* header light */}
      <HeaderHome />

      {/*WHAT WE DO */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14 py-12 mobile:p-14">
          <h5 className="font-bold text-lightgray">WHAT WE DO</h5>
          <h1 className="font-bold mobile:text-center">
            Innovation tailored for you
          </h1>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i className="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="text-lightgray">Team</h6>
          </div>
        </div>
      </div>

      {/*hero pictures*/}
      <div className="">
        <div className="w-full mx-auto h-[530px] flex flex-row justify-center items-center gap-3 mobile:flex mobile:flex-col mobile:justify-center mobile:p-14 mobile:h-full mobile:w-full">
          <div className="flex-[50%] max-w-[50%] mobile:hidden">
            <img src={teamhero1} className="object-cover"></img>
          </div>
          <div className="hidden mobile:flex mobile:flex-[50%] mobile:w-[400px] mobile:h-[530px]">
            <img src={teamhero1a}></img>
          </div>
          <div className="flex flex-col flex-[25%] gap-5 mobile:hidden">
            <img src={teamhero2}></img>
            <img src={teamhero3}></img>
          </div>

          <div className="hidden mobile:flex mobile:flex-row mobile:justify-center mobile:w-[50%] mobile:gap-1">
            <img src={teamhero2a}></img>
            <img src={teamhero3a}></img>
          </div>

          <div className="flex flex-col flex-[25%] gap-5 mobile:hidden">
            <img src={teamhero4}></img>
            <img src={teamhero5}></img>
          </div>

          <div className="hidden mobile:flex mobile:flex-row mobile:justify-center mobile:w-[50%] mobile:gap-1 ">
            <img src={teamhero4a}></img>
            <img src={teamhero5a}></img>
          </div>
        </div>
      </div>

      {/* meet our team */}
      <div className="flex justify-center  ">
        <div className="container flex flex-col max-w-[1050px] min-h-[595px] py-20 gap-20 mobile:p-14">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold">Meet Our Team</h2>
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

      {/*Start your 14 days free trial */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-7 py-10 mobile:p-14">
          <h2 className="font-bold text-center">
            Start your 14 days free trial
          </h2>
          <h6 className="text-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </h6>
          <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
            <h6>Try it free now</h6>
          </button>
          <div className="flex gap-8 text-3xl text-turku">
            <i className="fa-brands fa-twitter "></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
