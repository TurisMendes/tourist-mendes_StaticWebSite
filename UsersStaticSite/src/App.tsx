import React from "react"
import { Route, Routes } from "react-router-dom"

function App(): React.ReactNode {
  return (
    <main>
      <Routes>
        <Route path="/" element={(<h1>Hello World!</h1>)} />
      </Routes>
    </main>
  )
}

export default App
