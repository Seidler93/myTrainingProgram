import CampCard from "./CampCard"

export default function Camps() {
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
      img: '/camp1.jpg', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    }, 
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
      img: '/camp1.jpg', 
      title: 'camp one testing', 
      date: 'May 25th- June 26',
      description: [
        'Join us for an intensive and dynamic college-level Speed and Agility Camp designed to enhance athletic performance and elevate your game to the next level. Whether you\'re a seasoned athlete looking to refine your skills or a newcomer eager to develop a competitive edge, this camp is tailored to meet your needs.',
        'Led by experienced coaches and trainers with backgrounds in various sports disciplines, our program focuses on the fundamental principles of speed, agility, and quickness (SAQ) training. Through a combination of cutting-edge drills, personalized instruction, and state-of-the-art equipment, participants will embark on a transformative journey to unlock their full athletic potential.'
      ]
    }
  ]

  return (
    <div className="max-w">
      {camps.map((camp) => <CampCard camp={camp}/>)}
    </div>
  )
}