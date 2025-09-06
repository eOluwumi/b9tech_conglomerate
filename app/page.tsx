import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Connect with me on LinkedIn:</p>
      <Link href="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/">
        <a target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </Link>
      {/* rest of code here */}
    </div>
  )
}

export default HomePage
