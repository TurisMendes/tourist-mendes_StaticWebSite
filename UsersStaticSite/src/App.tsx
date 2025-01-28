import React from "react"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import Footer from "./components/Footer/Footer"
import LocalAttraction from "./pages/LocalAttraction/LocalAttraction"
function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="/atracaoLocal/:id" element={(<LocalAttraction />)} />
      </Routes>
      <Footer />  
    </>
  )
}

export default App
