import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Test from "./components/Test/Test"

function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<Test />)} />
      </Routes>
    </>
  )
}

export default App
