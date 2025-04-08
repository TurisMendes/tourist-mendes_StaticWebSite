import React from "react"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import Footer from "./components/Footer/Footer"
import { AgenteCulturalPage } from "./pages/AgenteCulturalPage/AgenteCulturalPage"
import './App.css';
import AtracaoLocalPage from "./pages/AtraçãoLocalPage/AtracaoLocalPage"

import EventoPage from "./pages/EventoPage/EventoPage"
import TrilhaPage from "./pages/TrilhaPage/TrilhaPage"
import NotFound from "./pages/NotFound/NotFound"
function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
        <Route path="atracaoLocal/:id" element={(<AtracaoLocalPage />)} />
        <Route path="evento/:id" element={(<EventoPage />)} />
        <Route path="trilha/:id" element={(<TrilhaPage />)} />
        <Route path="*" element={(<NotFound />)} />
        <Route path="agentecultural/:id" element={(<AgenteCulturalPage />)} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
