import React from "react";
import { Search } from "lucide-react";
import Button from "../common/Button";

const JobSearch = () => (
  <div className="bg-white rounded-lg p-4 mt-4 flex items-center space-x-4">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="flex-1 p-2 px-3 rounded border-0  text-secondary  "
    />
    <select className="p-2 font-neueRoman  border-l border-0 border-lightGrey text-secondary">
      <option>Select Location</option>
    </select>
    <select className="p-2 font-neueRoman  border-l border-0 border-lightGrey text-secondary">
      <option>Job Type</option>
    </select>
    <Button className="font-neueRoman text-white px-8 py-2  flex items-center">
      <Search className="mr-2" /> Search
    </Button>
  </div>
);

export default JobSearch;