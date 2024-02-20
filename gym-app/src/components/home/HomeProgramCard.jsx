import { useState } from "react"

export default function HomeProgramCard({program}) {
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
      <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="d-flex m-3 program">
        <img src={program.img} alt="" />
        <section className="d-flex flex-column py-5 text-center px-3 text-white">
          <h3>{program.title}</h3>
          <h4>{program.length}</h4>
        </section>
      </div>
    </>
  )
}