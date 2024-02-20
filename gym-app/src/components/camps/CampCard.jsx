export default function CampCard({camp}) {

  return (
    <div className="d-flex p-3 camp">
      <img src={camp.img} alt="" />
      <section className="d-flex flex-column text-start ps-3">
        <h3>{camp.title}</h3>
        <h4>{camp.date}</h4>
        {camp.description.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </section>
    </div>
  )
}