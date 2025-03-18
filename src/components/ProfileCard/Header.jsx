import React from "react";

const ProfileHeader = ({ backgroundImage, profileImage, name, title, location }) => (
  <div className="relative bg-white" >
    <img
      src={backgroundImage}
      alt="Background"
      className="w-full h-32 object-cover"
      loading="lazy" 
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src={profileImage}
        alt={name}
        className="w-24 h-24 rounded-full border-4 border-white"
        loading="lazy" 
      />
    </div>
    <div className="text-center flex flex-col items-center mt-12 px-4 pb-1">
      <h2 className="text-li font-neueBold text-black">{name}</h2>
      <p className="text-sm  font-bold w-[236px] text-center font-neueLight text-gray-600 ">{title}</p>
      <p className="text-xs font-neueLight text-gray-500">{location}</p>
    </div>
  </div>
);

export default ProfileHeader;