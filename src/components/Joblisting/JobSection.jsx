import React from 'react'
import JobCard from './JobCard'

const JobSection = ({ jobData }) => {
    return (
        <div className="mt-4">
            <div className="flex space-x-4 items-end">
                <h2 className="text-xl   sm:text-2xl font-semibold">
                    {/* Featured Jobs */}
                    {jobData.title}
                </h2>
                <span className="text-primary !underline !underline-offset-4 line-clamp-3 font-neueRoman cursor-pointer !text-li sm:text-base">

                    See {jobData.title}
                </span>
            </div>

            <div className="
             grid grid-cols-1 gap-6 mt-4
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
            xl:grid-cols-4 2xl:grid-cols-4 !3xl:grid-cols-6
            ">
                {/* jobData.data */}
                {jobData.jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobSection