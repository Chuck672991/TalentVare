import React from "react";
import {   Bookmark, MapPin, Clock4 } from "lucide-react";
import CompanyIconSvg from "../../assets/CompanyIconSvg";
import Button from "../common/Button";
const JobCard = ({ job }) => (
  <div className="bg-white font-neueRoman text-secondary p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
    <span className="text-xs font-neueRoman text-secondary font-bold uppercase tracking-wide">
      Promoted
    </span>

    <div className="flex items-center space-x-4 mt-4">
      <CompanyIconSvg className="w-12 h-12" />
      <div className="flex-1">
        <h3 className="text-lg font-neueMedium text-secondary">{job.title}</h3>
        <p className="text-sm text-lightGrey">{job.company}</p>
      </div>
    </div>

    <div className="flex items-center text-sm text-lightGrey mt-4">
      <MapPin  className="w-4 h-4 mr-2" />
      {job.location}
    </div>

    <div className="flex items-center text-sm text-lightGrey mt-2">
    <Clock4  className="w-4 h-4 mr-2" />
      {job.posted} | <span className="text-primary ml-1">{job.applicants} applicants</span>
    </div>

    <div className="flex justify-between items-center mt-6">
      <Button className="w-full py-2">Apply Now</Button>
      <Bookmark
        size={28}
        color="#737A91"
        className="ml-4 cursor-pointer hover:text-primary transition-colors duration-300"
      />
    </div>
  </div>
);

export default React.memo(JobCard); 