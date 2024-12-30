import React from "react"
import { Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import AttractionCard from "./components/AttractionCard/AttractionCard"
import EventCard from "./components/EventCard/EventCard"
import TrailCard from "./components/TrailCard/TrailCard"
import AgentCard from "./components/AgentCard/AgentCard"
import ButtonCustom from "./components/ButtonCustom/ButtonCustom"

function App(): React.ReactNode {
  return (
    <main className="bg-offwhite dark:bg-lightBlack flex flex-col items-center justify-center gap-10 w-full">
      <Header />
      <AttractionCard />
      <AgentCard />
      <TrailCard difficulty="fácil" />
      <EventCard />
      <ButtonCustom variant="primary" text="Saiba mais"/>
       </main>
  )
}

export default App
