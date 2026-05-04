import React, { useState } from 'react'
import {API_BASE_URL} from '../config';

type Op = 'add' | 'subtract' | 'multiply' | 'divide'

const MathPage: React.FC = () => {
  const [number1, setNumber1] = useState<string>('')
  const [number2, setNumber2] = useState<string>('')
  const [loading, setLoading] = useState<Op | null>(null)
  const [result, setResult] = useState<string | number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const callOp = async (op: Op) => {
    setLoading(op)
    setResult(null)
    setError(null)
    try {
      // Validate inputs are numbers
      const n1 = Number(number1)
      const n2 = Number(number2)
      if (Number.isNaN(n1) || Number.isNaN(n2)) {
        setError('Please enter valid numbers in both fields.')
        return
      }
      const params = new URLSearchParams()
      params.set('number1', String(n1))
      params.set('number2', String(n2))
      const res = await fetch(`${API_BASE_URL}/${op}?${params.toString()}`)
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error ?? `Request failed with status ${res.status}`)
      } else {
        setResult(data.result ?? JSON.stringify(data))
      }
    } catch (e: any) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(null)
    }
  }

  const fieldStyle: React.CSSProperties = { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }
  const btn = (op: Op, label: string) => (
    <button key={op} onClick={() => callOp(op)} disabled={!!loading}>
      {loading === op ? 'Working...' : label}
    </button>
  )

  return (
    <div>
      <h1>Math</h1>
      <div style={fieldStyle}>
        <label htmlFor="n1" style={{ minWidth: 90 }}>Number 1:</label>
        <input id="n1" type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="n2" style={{ minWidth: 90 }}>Number 2:</label>
        <input id="n2" type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {btn('add', 'Add')}
        {btn('subtract', 'Subtract')}
        {btn('multiply', 'Multiply')}
        {btn('divide', 'Divide')}
      </div>

      <div style={{ marginTop: 16 }}>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        {result !== null && !error && <div>Result: {String(result)}</div>}
      </div>
    </div>
  )
}

export default MathPage
