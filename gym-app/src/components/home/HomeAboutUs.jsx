import HomeCampCard from './HomeCampCard'

export default function HomeAboutUs() {
  const aboutUs = "Welcome to Elite Performance Athletics! With over 8 years of experience in strength and conditioning coaching, we're dedicated to empowering athletes of all levels to reach their full potential. Our personalized training programs are designed by athletes, for athletes, and prioritize individualized attention and support. Join us to experience the difference firsthand and unlock your athletic greatness.";

  return (
    <div className='d-flex flex-column w-100 justify-content-center align-items-center rel mb-4'>
      <div className="title mt-3 mb-5"><h2 className="px-5 mt-5 text-dark">ABOUT US</h2></div>
      <p className='about-cont'>{aboutUs}</p>
    </div>
  )
}
