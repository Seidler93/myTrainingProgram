export default function Footer() {
  return (
    <footer className="bg-dark text-light w-100 pb-5 d-flex justify-content-around align-items-center">
      <h2 className="pt-5 pb-3">Primitive Athletics</h2>
      <section className="d-flex w-100 align-items-start pt-5" >
        <div className="d-flex flex-column px-5">
          <h4>Contact Us</h4>
          <button>Email</button>
          <button>Instagram</button>
          <button>FAQs</button>
        </div>
        <div className="d-flex flex-column px-5">
          <h4>Company</h4>
          <button>About Us</button>
          <button>Partnership</button>
          <button>Internships</button>
          <button>Careers</button>
        </div>
        <div className="px-5">
          <h5>Subscribe to our newsletter!</h5>
          <input type="email" name="" id="" placeholder="email"/>
          <button className="ms-3 sub-btn">Subscribe</button>
        </div>
      </section>
    </footer>
  )
}