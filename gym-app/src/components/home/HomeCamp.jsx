import HomeCampCard from './HomeCampCard'

export default function HomeCamps() {
  const camps = [
    {
      img: '/camp1.jpg', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    },
    {
      img: '/camp2.jpg', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    }, 
    {
      img: '/camp3.png', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    },
    {
      img: '/camp4.jpg', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    }
  ]

  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center rel pb-4'>
      <div className="title mt-5 mb-3"><h2 className="px-5 mt-5 text-dark">UPCOMING CAMPS</h2></div>
      <div className='d-flex flex-wrap w-100 justify-content-center camp-cont'>
        {camps.map((camp) => <HomeCampCard camp={camp}/>)}
      </div>
    </div>
  )
}
