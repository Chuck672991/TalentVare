import React from "react";
import Button from "../common/Button";


const SimilarJobs = ({similarJobs}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
    <span className="font-neueRoman text-lightGrey !text-li sm:text-base">
      Similar:
    </span>

    {similarJobs.map((job, index) => (
      <Button
        key={index}
        className="!py-1"
        variant="secondary"
      >
        {job}
      </Button>
    ))}
  </div>
  );
};

export default SimilarJobs;
