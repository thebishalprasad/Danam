"use client";
import Image from "next/image";
import Not404Found from "./assets/notfound.webp";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-10 shadow-md bg-gray-200">
      <div className="mx-auto w-full">
        <Image
          src={Not404Found}
          alt="Page Not Found"
          className="mx-auto w-40 h-40"
          priority
        />
      </div>
      <h1 className="text-center text-gray-600 text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="text-center text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
    </div>
  );
};

export default NotFound;
