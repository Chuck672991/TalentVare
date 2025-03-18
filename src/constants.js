const NAV_LINKS = [

  { name: "Top Companies", path: "/top-companies" },
  { name: "Job Tracker", path: "/job-tracker" },
  { name: "My Calendar", path: "/calendar" },
  { name: "Documents", path: "/documents" },
  { name: "Messages", path: "/messages" },
  { name: "Notifications", path: "/notifications" },
];


const user = {
  backgroundImage: "/images/profileBg.png",
  profileImage: "/images/Oval.png",
  name: "Albert Flores",
  title: "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...",
  location: "Clinton, Maryland",
};

const stats = [
  { label: "Profile Visitors", value: "140" },
  { label: "Resume Viewers", value: "20" },
  { label: "My Jobs", value: "80" },
];

const calendar = {
  title: "My calendar",
  subtitle: "Upcoming Interviews",
};
const jobsLisiting = [
  {
    title: "Featured Jobs",
    jobs: [
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',
        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        companyImg: '/images/company.png',

        company: "Teams",
        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',

        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',

        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
    ]
  }, {
    title: "Recommended Jobs"
    ,
    jobs: [
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',
        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        companyImg: '/images/company.png',

        company: "Teams",
        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',

        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
      {
        title: "UI/UX Designer",
        company: "Teams",
        companyImg: '/images/company.png',

        location: "Seattle, USA (Remote)",
        posted: "1 day ago",
        applicants: 22,
      },
    ]

  }
]
const jobData = [
  {
    title: "UI/UX Designer",
    company: "Teams",
    companyImg: '/images/company.png',
    location: "Seattle, USA (Remote)",
    posted: "1 day ago",
    applicants: 22,
  },
  {
    title: "UI/UX Designer",
    companyImg: '/images/company.png',

    company: "Teams",
    location: "Seattle, USA (Remote)",
    posted: "1 day ago",
    applicants: 22,
  },
  {
    title: "UI/UX Designer",
    company: "Teams",
    companyImg: '/images/company.png',

    location: "Seattle, USA (Remote)",
    posted: "1 day ago",
    applicants: 22,
  },
  {
    title: "UI/UX Designer",
    company: "Teams",
    companyImg: '/images/company.png',

    location: "Seattle, USA (Remote)",
    posted: "1 day ago",
    applicants: 22,
  },
];
const similarJobs = ["Frontend", "Backend", "Graphic Designer"];

export {
  NAV_LINKS,
  user,
  stats,
  calendar,
  jobData,
  similarJobs,
  jobsLisiting
}