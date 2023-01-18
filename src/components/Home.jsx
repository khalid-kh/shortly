import React from "react";
import UrlForm from "./UrlForm";

const home = () => {
  return (
    <div className="py-20">
      <div className="lg:grid lg:grid-cols-2 mx-auto max-w-8xl lg:px-8 lg:gap-8 justify-center">
        <div className="lg:py-24 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6">
          <h1 className="text-white text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
            <span className="block">More than just</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
              shorter links
            </span>
          </h1>
          <p className=" text-base sm:text-xl text-gray-300 sm:mt-5 mt-3">
            {/* Build your brand's recognition and get detailed insights on how your
            links are performing. */}
            Shorten your link simply by coping and pasting it.
          </p>
          <UrlForm />
        </div>
        <div className="mt-12 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img
              src="/heroImage.png"
              alt="man standing by the desk"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
