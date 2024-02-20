import { useState } from "react"

export default function CampCard({camp}) {
  const [imgOpacity, setImgOpacity] = useState(0);

  const mouseOut = () => {
    setImgOpacity(0)
  }

  const mouseIn = () => {
    setImgOpacity(1)
    console.log(true);
  }

  return (
    <>
      <div className='d-flex flex-wrap w-100 justify-content-center camp-bg' style={{opacity: imgOpacity}}>
        <img src={camp.img} alt=""/>
      </div>
      <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="d-flex m-3 camp">
        <img src={camp.img} alt="" />
        <section className="d-flex flex-column py-5 text-center px-3 text-white">
          <h3>{camp.title}</h3>
          <h4>{camp.date}</h4>
        </section>
      </div>
    </>
  )
}