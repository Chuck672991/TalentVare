import React from "react";
import JobSearch from "./JobSearch";
import JobCard from "./JobCard";

const JobListing = ({jobData}) => (
  <div className=" text-black  mx-10 min-h-screen px-1 py-6">
    <h1 className="text-h1  font-neueRoman font-heading">
      Find your Dream Job, <span className="text-primary font-neueRoman">Albert!</span>
    </h1>
    <p className="text-lightGrey     font-semibold">Explore the latest job openings and apply for the best opportunities available today!</p>

    <JobSearch />

    <div className="mt-6">
      <h2 className="text-lg font-semibold">
        Featured Jobs <span className="text-primary font-neueRoman cursor-pointer">See Featured Jobs</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  </div>
);

export default JobListing;