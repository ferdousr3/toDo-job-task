import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container pt-24 pb-5 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        <div className="col-span-1">
          <h1 className="text-5xl font-extrabold text-second ">404</h1>
        </div>
        <div className="col-span-4 border-l md:border-l-four md:pl-5">
          <h1 className="text-5xl font-extrabold  text-second ">
            Page not Found
          </h1>
          <p className="pt-1  text-four text-md font-normal">
            Please check the URL in the address bar and try again
          </p>
          <div className="mt-3">
            <button
              className="bg-main text-white py-2.5 px-8 rounded-3xl uppercase text-[14px] font-normal hover:bg-mains transition-all duration-500  "
              onClick={() => navigate("/")}
            >
              Go back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
