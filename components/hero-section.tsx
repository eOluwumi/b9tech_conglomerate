import type React from "react"
import { Button } from "antd"
import { Link } from "react-router-dom"

const HeroSection: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am a software developer with a passion for creating innovative solutions. Connect with me on LinkedIn to learn
        more about my work and experiences.
      </p>
      <Button type="primary">
        <Link to="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/">Connect on LinkedIn</Link>
      </Button>
    </div>
  )
}

export default HeroSection
