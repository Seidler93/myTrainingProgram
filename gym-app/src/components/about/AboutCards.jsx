export default function AboutCards({section}) {
  return (
    <div id="about" className={`w-100 d-flex justify-content-center flex-column align-items-center mb-5`}>
      <div className={`${section.background} max-w `}>
        <img className="mb-4" src={section.img} alt="" />
        <h3 className="text-center">{section.title}</h3>
        <p className="pt-2 px-5 pb-5">{section.description}</p>
      </div>
    </div>
  )
}