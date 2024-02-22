import { Link } from "react-router-dom";

export default function NavBtn({page, name}) {
  return (
    <Link to={page} className="d-flex justify-content-center align-items-center">
      {name}
    </Link>
  )
}