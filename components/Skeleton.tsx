import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse ">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 m-auto"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;