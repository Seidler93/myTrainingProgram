import AboutCards from "../components/about/AboutCards";

export default function AboutPage() {
  const sections = [
    {
      title: 'Coaches Who Care',
      description: "At Primitive Athletics, we believe in the power of personalized coaching and forging genuine connections with our athletes. With a commitment to individualized attention, we prioritize understanding each athlete's unique goals, challenges, and aspirations. Through one-on-one interactions, we tailor our programs to meet the specific needs of every athlete, fostering a supportive environment where growth and development flourish.",
      background: 'bg-white',
      img: 'about1.jpg'
    },
    {
      title: 'Experience and Expertise',
      description: "Having coached thousands of athletes across various levels, from youth to professionals, I have honed my craft and refined my approach to sports performance training. Drawing on my extensive experience, I leverage evidence-based methodologies, cutting-edge techniques, and proven strategies to deliver results-driven programming that maximizes athletic performance and minimizes injury risk.",
      background: 'light',
      img: 'about1.jpg'
    },
    {
      title: 'Our Mission',
      description: "At Primitive Athletics, our mission extends beyond merely enhancing physical capabilities. We strive to instill confidence, resilience, and a mindset of continuous improvement in every athlete we work with. By promoting holistic development encompassing physical, mental, and emotional aspects, we empower athletes to not only succeed on the field but also thrive in all facets of life.",
      background: 'bg-white',
      img: 'about1.jpg'
    },
    {
      title: 'Programs and Camps',
      description: "Whether you're seeking personalized online programs accessible through our user-friendly app or immersive in-person camps designed to elevate your game, Primitive Athletics offers comprehensive solutions to suit your needs. Our programs are crafted with meticulous attention to detail, integrating the latest advancements in sports science to optimize performance and unlock your true potential.",
      background: 'light',
      img: 'about1.jpg'
    },
    {
      title: 'Join the Primitive Athletics Community',
      description: "Join us on this exhilarating journey of growth, transformation, and achievement. Together, let's embark on a path toward greatness, where every milestone is celebrated, every setback is a learning opportunity, and every success is a testament to the unwavering dedication of the athlete within.",
      background: 'bg-white',
      img: 'about1.jpg'
    }
  ]

  return (
    <div className="py-5 ">
      <div className="w-100 d-flex justify-content-center mb-4"><h2 className="text-center bor-btm px-5 pb-2">WHO WE ARE</h2></div>
      {sections.map((section) => <AboutCards section={section}/>)}
    </div>
  )
}