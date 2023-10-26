import React from "react";

export default function Clients() {
  return (
    <>
      <div className="clients flex justify-center items-center  bg-verylightgray3">
        <div className="container flex justify-between items-center min-h-[175px] max-w-[1050px] py-12 text-lightgray text-7xl gap-8 mobile:flex mobile:flex-col">
          <i className="fa-brands fa-hooli"></i>
          <i className="fa-brands fa-lyft"></i>
          <i className="fa-brands fa-pied-piper-hat"></i>
          <i className="fa-brands fa-stripe"></i>
          <i className="fa-brands fa-aws"></i>
          <i className="fa-brands fa-reddit-alien"></i>
        </div>
      </div>
    </>
  );
}
