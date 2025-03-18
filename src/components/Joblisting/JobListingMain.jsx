import React from "react";
import JobSearch from "./JobSearch";
import JobCard from "./JobCard";
import SimilarJobs from "./SimilarJobs";
import JobSection from "./JobSection";

const JobListing = ({ jobData,similarJobs }) => (
    <div className="text-secondary min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center sm:text-left">
            <h1 className="text-h1 sm:text-4xl  font-neueMedium text-secondary font-li">
                Find your Dream Job,
                <span className="text-primary ">{" "} Albert!</span>
            </h1>
            <p className="text-lightGrey font-neueLight  text-sm sm:text-base font-semibold mt-2">
                Explore the latest job openings and apply for the best opportunities
                available today!
            </p>
        </div>
      
        <div className="mt-6">
            <JobSearch />
        </div>
        <div className="mt-6">
            <SimilarJobs similarJobs={similarJobs} />
        </div>
     {jobData.map(job=><JobSection jobData={job} />)}   
    </div>
);

export default JobListing;