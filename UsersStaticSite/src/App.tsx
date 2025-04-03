import React from "react"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import Footer from "./components/Footer/Footer"
import NotFound from "./components/NotFound/NotFound"
import { AgenteCulturalPage } from "./pages/AgenteCulturalPage/AgenteCulturalPage"
import './App.css';



function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="*" element={(<NotFound />)} />
        <Route path="agentecultural/:id" element={(<AgenteCulturalPage />)} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
