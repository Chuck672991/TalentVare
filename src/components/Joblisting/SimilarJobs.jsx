import React from "react";


const SimilarJobs = ({similarJobs}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-neueRoman text-lightGrey">Similar:</span>
      {similarJobs.map((job, index) => (
        <button
          key={index}
          className="border border-lightGrey font-neueRoman text-lightGrey px-4 py-1 rounded hover:bg-gray-200 transition"
        >
          {job}
        </button>
      ))}
    </div>
  );
};

export default SimilarJobs;
