import React from "react";
import { Card } from "flowbite-react";
import bg3 from "../assets/bg3.jpg";

const Service = () => {
  return (
    <div
      className="relative  bg-no-repeat h-screen w-screen  "
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundPosition: "right bottom",
      }}
    >
      <div className="md:px-14 px-4 py-8 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-5xl text-gray-500 font-semibold mb-2">
            Welcome to MathruLK
          </h2>
          <p className="text-5xl text-pink-500">All your pregancy needs</p>
        </div>
        <div>
          <h1 className="text-4xl text-black font-semibold mb-2 pl-10">
            Our Services
          </h1>
          <hr className="border-pink-500 my-5 w-1/4" />
        </div>
        <div className="flex flex-row space-x-4">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="flex flex-row space-x-4 my-4">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;
