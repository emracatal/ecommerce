import React from "react";
import blog1 from "../assets/blog1.png";

export default function Blogcard() {
  return (
    <>
      <div className="blog max-w-[348px]">
        <img src={blog1} className=""></img>
        <div className="blogbody flex flex-auto flex-col items-start gap-4 py-6">
          <div className="colors flex gap-4 ">
            <p className="text-turku">Google</p>
            <p>Trending</p>
            <p>New</p>
          </div>
          <h4 className="font-bold">Loudest à la Madison #1 (L'integral)</h4>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="time-comment flex justify-between items-center gap-5">
          <div className="time flex gap-2 items-center">
            <i className="fa-regular fa-clock text-turku"></i>
            <p className="">22 April 2021</p>
          </div>
          <div className="comments flex gap-2 items-center">
          <i className="fa-solid fa-chart-simple text-secondarycolor1"></i>
            <p className="">10 comments</p>
          </div>
          </div>
          <div className="flex flex-row items-center">
          <h6 className="font-bold">Learn More</h6>
          <i className="fa-solid fa-chevron-right text-turku gap-3"></i>
          </div>
        </div>
      </div>
    </>
  );
}
