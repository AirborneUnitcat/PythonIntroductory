import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const listStyle: React.CSSProperties = { lineHeight: 1.8 }
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is a minimal React frontend that talks to a FastAPI backend at <code>http://localhost:8000</code>.</p>
      <h2>Pages</h2>
      <ul style={listStyle}>
        <li><Link to="/hello">Hello</Link> — call the <code>/hello-world</code> endpoint (optionally with a name)</li>
        <li><Link to="/math">Math</Link> — add, subtract, multiply, or divide two numbers</li>
      </ul>
    </div>
  )
}

export default Home
