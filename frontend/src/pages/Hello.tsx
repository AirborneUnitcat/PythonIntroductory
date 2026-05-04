import React, { useState } from 'react'
import {API_BASE_URL} from '../config';

const Hello: React.FC = () => {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const callHello = async () => {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const params = new URLSearchParams()
      if (name.trim()) params.set('name', name.trim())
      const res = await fetch(`${API_BASE_URL}/hello-world?${params.toString()}`)
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error ?? `Request failed with status ${res.status}`)
      } else {
        setResult(data.result ?? JSON.stringify(data))
      }
    } catch (e: any) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <label htmlFor="name">Name (optional):</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alice"
        />
        <button onClick={callHello} disabled={loading}>
          {loading ? 'Loading...' : 'Say Hello'}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        {result && <div>Result: {result}</div>}
      </div>
    </div>
  )
}

export default Hello
