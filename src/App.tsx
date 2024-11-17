
import { Suspense } from 'react'
import './App.css'
import List from './components/NewsList/List'

function App() {

  return (
    <>
      <h1>
        Your News Feed:
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </>
  )
}

export default App
