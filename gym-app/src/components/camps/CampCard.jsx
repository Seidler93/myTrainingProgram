export default function CampCard({camp}) {

  return (
    <div className="d-flex camp mb-5">
      <img src={camp.img} alt="" />
      <section className="d-flex flex-column text-start p-3">
        <h3>{camp.title}</h3>
        <h4>{camp.date}</h4>
        {camp.description.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
        <div className="mt-3 mb-2">
          <button className="me-4">Add to Cart</button>
          <button>View Program</button>
        </div>
      </section>
    </div>
  )
}