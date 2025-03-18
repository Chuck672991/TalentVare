import React from "react";
import { Search } from "lucide-react";
import Button from "../common/Button";

const JobSearch = () => (
  <div className="bg-white font-neueRoman rounded-md p-4 mt-4 flex items-center space-x-5">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="flex-1 p-2 px-3 rounded border-0 focus:outline-none  text-secondary   w-full sm:w-auto "
    />
    <select className="p-2 w-full  sm:w-auto font-neueRoman  focus:outline-none cursor-pointer   border-l border-0 border-gray-300 text-secondary">
      <option>Select Location</option>
    </select>
    <select className="p-2 w-full  sm:w-auto font-neueRoman focus:outline-none cursor-pointer  border-l border-0 border-gray-300 text-secondary">
      <option>Job Type</option>
    </select>
    <Button className="w-full cursor-pointer sm:w-auto px-7 py-2 flex items-center justify-center bg-primary hover:bg-primary-dark text-white">
      <Search className="mr-3" /> Search
    </Button>
    
  </div>
);

export default JobSearch;