import React from "react";
// import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MapPinCheckIcon, ClockAlert } from "lucide-react";
const JobCard = ({ job }) => (
    <div className="bg-white text-secondary p-4 rounded-lg shadow-lg">
        <span className="text-sm font-neueRoman text-lightGrey font-bold">Promoted</span>
        <h3 className="text-lg font-semibold mt-2">{job.title}</h3>
        <p className="text-sm text-textGray">{job.company}</p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
            <MapPinCheckIcon className="mr-2" /> {job.location}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
            <ClockAlert className="mr-2" /> {job.posted} | <span className="text-primary ml-1">{job.applicants} applicants</span>
        </div>
        <button className="bg-primary text-white w-full py-2 mt-3 rounded">Apply Now</button>
    </div>
);

export default React.memo(JobCard); 