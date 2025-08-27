import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import CarHeroForTeam from '../components/Team/CarHeroForTeam'
import TeamMemberCart from '../components/Team/TeamMemberCart'
import memberImage1 from '../assets/team/team-image-1.jpg'
import memberImage2 from '../assets/team/team-image-2.jpg'
import memberImage3 from '../assets/team/team-image-3.jpg'
import memberImage4 from '../assets/team/team-image-4.jpg'

const Team = () => {
  return (
    <div>
      <Navbar />
      <CarHeroForTeam />
      <div className='w-4/5 mx-auto my-10'>
        <div className='cart grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          <TeamMemberCart mainDivClassName={"shadow-xl"} img={memberImage1} fullName={"John Doe"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt laboriosam dolorum vel iure minus dolorem,"} designation={"CEO"} />
          <TeamMemberCart mainDivClassName={"shadow-xl"} img={memberImage2} fullName={"John Doe"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt laboriosam dolorum vel iure minus dolorem,"} designation={"Customer Support"} />
          <TeamMemberCart mainDivClassName={"shadow-xl"} img={memberImage3} fullName={"John Doe"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt laboriosam dolorum vel iure minus dolorem,"} designation={"Customer Support"} />
          <TeamMemberCart mainDivClassName={"shadow-xl"} img={memberImage4} fullName={"John Doe"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt laboriosam dolorum vel iure minus dolorem,"} designation={"Customer Support"} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Team
