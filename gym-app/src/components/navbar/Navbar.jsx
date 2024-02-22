import NavBtn from "./NavBtn"

export default function Navbar() {
  const pages = [
    {page: '/', name: 'Home'},
    {page: '/about', name: 'About', dropdown: false},
    {page: '/', name: 'Programs'},
    {page: '/camps', name: 'Camps'},
    {page: '/', name: 'Login'},
    {page: '/', name: 'App'},
    {page: '/', name: 'Cart'},
  ]

  return (
    <nav className="px-4 bg-dark text-light d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-around align-items-center">
        <h3>Primitive Athletics</h3>
        {pages.map((page) => <NavBtn page={page.page} name={page.name}/>)}
      </div>
    </nav>
  )
}