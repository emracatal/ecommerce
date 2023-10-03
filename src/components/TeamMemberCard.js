import React from "react";
import teammember1 from "../assets/teammember1.jpg";

export default function TeamMemberCard() {
  return (
    <>
      <div className="team max-w-[316px]">
        <img src={teammember1} className=""></img>
        <div className="teambody flex flex-auto flex-col items-center gap-4 py-6">
          <h5 className="font-bold">Username</h5>
          <h6 className="text-lightgray">Profession</h6>
          <div className="flex text-turku items-center gap-3 text-2xl">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
      </div>
    </>
  );
}
