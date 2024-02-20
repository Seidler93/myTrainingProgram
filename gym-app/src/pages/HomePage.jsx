import HomeCamps from "../components/home/HomeCamp"

export default function HomePage() {
  return (
    <div id="home" className="text-center d-flex justify-content-center align-items-center flex-column">
      {/* Hero and call to action */}
      <div className="hero d-flex justify-content-center align-items-center">
        <img src="/camp3.png" alt="" />
        <button>BEGIN TRAINING NOW</button>
      </div>
      {/* Upcoming camps */}
      <HomeCamps/>
    </div>
  )
}