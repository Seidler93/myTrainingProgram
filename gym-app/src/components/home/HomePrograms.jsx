import HomeProgramCard from './HomeProgramCard'

export default function HomePrograms() {
  const programs = [
    {
      img: '/camp1.jpg', 
      title: 'College Level', 
      length: '5 Weeks',
    },
    {
      img: '/camp2.jpg', 
      title: 'Youth', 
      length: '5 Weeks',
    }, 
    {
      img: '/camp3.png', 
      title: 'Speed and Agility', 
      length: '5 Weeks',
    },
    {
      img: '/camp4.jpg', 
      title: 'Varsity Prep', 
      length: '5 Weeks',
    },
    {
      img: '/camp3.png', 
      title: 'Speed and Agility', 
      length: '5 Weeks',
    },{
      img: '/camp3.png', 
      title: 'Speed and Agility', 
      length: '5 Weeks',
    },
  ]

  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center rel pb-4 program-bg' style={{backgroundImage: 'url("/bg.jpg")'}}>
      {/* <div className='d-flex flex-wrap w-100 justify-content-center camp-bg'>
        <img src='/stadium.webp'alt=""/>
      </div> */}
      <div className="title mt-3 mb-5"><h2 className="px-5 mt-5 text-dark">PROGRAMS</h2></div>
      <div className='d-flex flex-wrap w-100 justify-content-center program-cont'>
        {programs.map((program) => <HomeProgramCard program={program}/>)}
      </div>
    </div>
  )
}
