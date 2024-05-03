import React from "react";
import logo2 from "../assets/logo2.png";
import { Card } from "flowbite-react";

const Blog = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h1
          className="text-5xl black
             font-semibold mb-2"
        >
          Blogs
        </h1>
      </div>
      <div className="flex justify-center py-2">
        <img src={logo2} alt="" />
      </div>
      <div className="py-3">
        <div className="flex flex-row space-x-4">
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="flex flex-row space-x-4 py-5">
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card
            className="max-w-sm hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            imgSrc="/images/blog/image-4.jpg"
            horizontal
          >
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

export default Blog;
