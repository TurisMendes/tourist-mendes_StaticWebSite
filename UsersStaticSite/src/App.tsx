import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={''} />
      </Routes>
    </>
  )
}

export default App
