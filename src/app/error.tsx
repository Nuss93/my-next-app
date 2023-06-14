"use client"
import { Button } from 'react-bootstrap'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

export default function Error({error, reset} : ErrorPageProps) {
  return (
    <div className='center-page'>
        <h1>Uh Oh</h1>
        <p>Something went wrong.</p>
        <Button onClick={reset}>Reset</Button>
    </div>
  )
}
