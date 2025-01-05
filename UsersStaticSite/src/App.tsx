import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import { attractions } from "./api-mock/attractions"
import Carousel from "./components/Carousel/Carousel"
import AgentCard from "./components/AgentCard/AgentCard"
import { agents } from "./api-mock/agents"
import AttractionCard from "./components/AttractionCard/AttractionCard"
import { trails } from "./api-mock/trails"
import TrailCard from "./components/TrailCard/TrailCard"
import { events } from "./api-mock/events"
import EventCard from "./components/EventCard/EventCard"


function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(
          <>
            <Carousel>
              {attractions.map((attraction, index) => (
                <div key={index} className="flex-shrink-0">
                  <AttractionCard
                    imageData={attraction.imageData}
                    linkUrl={attraction.linkUrl}
                    title={attraction.title}
                    shortDescription={attraction.shortDescription}
                  />
                </div>
              ))}
            </Carousel>
            <Carousel slideWidth="30">
              {agents.map((agent, index) => (
                <div key={index} className="flex-shrink-0">
                  <AgentCard
                    imageData={agent.imageData}
                    linkUrl={agent.linkUrl}
                    shortDescription={agent.shortDescription}
                    name={agent.name}
                  />
                </div>
              ))}
            </Carousel>
            <Carousel slideWidth="20">
              {trails.map((trail, index) => (
                <div key={index} className="flex-shrink-0">
                  <TrailCard
                    imageData={trail.imageData}
                    linkUrl={trail.linkUrl}
                    shortDescription={trail.shortDescription}
                    title={trail.title}
                    level={trail.level}
                  />
                </div>
              ))}
            </Carousel>
            <Carousel slideWidth="40">
            {events.map((event, index) => (
                <div key={index} className="flex-shrink-0">
                  <EventCard
                    imageData={event.imageData}
                    linkUrl={event.linkUrl}
                    shortDescription={event.shortDescription}
                    eventTitle={event.eventTitle}
                  />
                </div>
              ))}
            </Carousel>
          </>
        )} />
      </Routes>
    </>
  )
}

export default App
