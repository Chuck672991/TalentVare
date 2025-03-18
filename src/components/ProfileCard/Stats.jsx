import React from "react";

const ProfileStats = ({ stats }) => (
  <div className="border-t bg-white my-3 rounded-lg border-gray-200">
    {stats.map((stat, index) => (
      <div key={index} className="flex justify-between px-6 py-3 ">
        <span className="font-neueRoman">{stat.label}</span>
        <span className="text-primary  font-neueRoman">{stat.value}</span>
      </div>
    ))}
  </div>
);

export default ProfileStats;