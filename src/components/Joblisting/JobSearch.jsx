import React from "react";
import { Search } from "lucide-react";

const JobSearch = () => (
  <div className="bg-white rounded-lg p-4 mt-4 flex items-center space-x-4">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="flex-1 p-2 rounded border border-gray-300 text-black"
    />
    <select className="p-2 rounded border border-gray-300 text-black">
      <option>Select Location</option>
    </select>
    <select className="p-2 rounded border border-gray-300 text-black">
      <option>Job Type</option>
    </select>
    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
      <Search className="mr-2" /> Search
    </button>
  </div>
);

export default JobSearch;