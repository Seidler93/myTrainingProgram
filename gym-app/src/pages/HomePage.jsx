import HomeAboutUs from "../components/home/HomeAboutUs"
import HomeCamps from "../components/home/HomeCamps"
import HomePrograms from "../components/home/HomePrograms"

export default function HomePage() {
  return (
    <div id="home" className="text-center d-flex justify-content-center align-items-center flex-column pb-5">
      {/* Hero and call to action */}
      <div className="hero d-flex justify-content-center align-items-center">
        <img src="/camp3.png" alt="" />
        <button>BEGIN TRAINING NOW</button>
      </div>
      {/* Upcoming camps */}
      <HomeCamps/>
      {/* Programs */}
      <HomePrograms/>
      {/* About Us */}
      <HomeAboutUs/>
    </div>
  )
}