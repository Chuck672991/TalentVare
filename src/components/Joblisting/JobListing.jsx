import React from "react";
import JobSearch from "./JobSearch";
import JobCard from "./JobCard";

const JobListing = ({ jobData }) => (
    <div className="text-black min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-neueBold text-secondary font-heading">
                Find your Dream Job,{" "}
                <span className="text-primary font-neueRoman">Albert!</span>
            </h1>
            <p className="text-lightGrey text-sm sm:text-base font-semibold mt-2">
                Explore the latest job openings and apply for the best opportunities
                available today!
            </p>
        </div>

        <div className="mt-6">
            <JobSearch />
        </div>

        <div className="mt-8">
            <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Featured Jobs
                </h2>
                <span className="text-primary font-neueRoman cursor-pointer text-sm sm:text-base">
                    See Featured Jobs
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
                {jobData.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </div>
    </div>
);

export default JobListing;