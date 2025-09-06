import { Link } from "react-router-dom"
import "./AppSidebar.css"

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* rest of code here */}
        </ul>
      </nav>
    </div>
  )
}

export default AppSidebar
