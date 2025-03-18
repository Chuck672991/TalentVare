import { ChevronDown } from "lucide-react";
import React from "react";

const ProfileCalendar = ({ title, subtitle }) => (
  <div className="bg-white relative px-6 re py-2 rounded-b-2xl">
    {/* <div className="flex justify-between"> */}

    <h3 className="text-lg  font-semibold font-neueRoman text-gray-700">{title}</h3>
    <ChevronDown  className="absolute  right-3 top-5 cursor-pointer"/>
    {/* </div> */}
    <p className="text-sm font-neueRoman text-gray-500">{subtitle}</p>
  </div>
);

export default ProfileCalendar; 