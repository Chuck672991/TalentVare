import React from "react";
import JobSearch from "./JobSearch";
import SimilarJobs from "./SimilarJobs";
import JobSection from "./JobSection";

const JobListing = ({ jobData,similarJobs }) => (
    <div className="text-secondary min-h-screen px-4 sm:px-6 lg:px-8 py-2 ">
        <div className="lg:mt-0 md:mt-5 vsm:my-6  md:my-2 xs:my-10 text-center sm:text-left">
            <h1 className="!text-h1 sm:text-4xl  font-neueMedium text-secondary font-li">
                Find your Dream Job,
                <span className="text-primary ">{" "} Albert!</span>
            </h1>
            <p className="text-lightGrey font-neueLight leading-4   sm:text-base font-semibold mt-2">
                Explore the latest job openings and apply for the best opportunities
                available today!
            </p>
        </div>
      
        <div className="mt-3 vsm:mb-6  ">
            <JobSearch />
        </div>
        <div className="mt-6 vsm:my-6">
            <SimilarJobs similarJobs={similarJobs} />
        </div>
     {jobData.map((job,index)=><JobSection key={index} jobData={job} />)}   
    </div>
);

export default JobListing;