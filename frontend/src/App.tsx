import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Hello from './pages/Hello'
import MathPage from './pages/Math'

function App() {
  const navStyle: React.CSSProperties = { display: 'flex', gap: 12, marginBottom: 16 }
  return (
    <div style={{ padding: 16, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/hello">Hello</Link>
        <Link to="/math">Math</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/math" element={<MathPage />} />
      </Routes>
    </div>
  )
}

export default App
