
import './App.css'
import { Navbar } from './components/Navbar'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { calendar, jobData, stats, user } from './constants'
import JobListing from './components/Joblisting/JobListing'
function App() {

  return (
    <div className='w-full h-screen bg-background'>
     <Navbar/>
     <div className=' px-10 flex justify-around py-5'>

      <ProfileCard user={user} stats={stats} calendar={calendar}/>
      <JobListing jobData={jobData}  />;
      {/* Section */}
     </div>
     </div>
  )
}

export default App
