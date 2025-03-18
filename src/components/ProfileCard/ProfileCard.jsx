import React from "react";
import ProfileHeader from "./Header";
import ProfileStats from "./Stats";
import ProfileCalendar from "./Calender";

const ProfileCard = ({ user, stats, calendar }) => (
  <div className="max-w-md   rounded-2xl overflow-hidden">
    <ProfileHeader
      backgroundImage={user.backgroundImage}
      profileImage={user.profileImage}
      name={user.name}
      title={user.title}
      location={user.location}
    />
    <ProfileStats stats={stats} />
    <ProfileCalendar title={calendar.title} subtitle={calendar.subtitle} />
  </div>
);
export default ProfileCard