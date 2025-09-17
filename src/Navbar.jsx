import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar-app">
        <Link to="/global">CSS Global</Link>
        <Link to="/modules">CSS Modules</Link>
        <Link to="/tailwind">Tailwind</Link>
        <Link to="/styled">Styled Components</Link>
      </nav>
    </div>
  )
}

export default Navbar