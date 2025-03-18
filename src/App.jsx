
import './App.css'
import Navbar  from './components/Navbar'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { calendar, jobsLisiting, similarJobs, stats, user } from './constants'
import JobListing from './components/Joblisting/JobListingMain'
function App() {

  return (
    <div className="w-full min-h-screen bg-background">
    <Navbar />
    <div className="px-4 sm:px-6 lg:px-10 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <div className="lg:col-span-1">
          <ProfileCard user={user} stats={stats} calendar={calendar} />
        </div>
        <div className="lg:col-span-3">
          <JobListing jobData={jobsLisiting} similarJobs={similarJobs} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
