import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import AttractionCard from "./components/AttractionCard/AttractionCard"
import { attractions } from "./api-mock/attractions"
import Carousel from "./components/Carousel/Carousel"


function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(
           <Carousel>
           {attractions.map((attraction, index) => (
             <div key={index} className="flex-shrink-0 w-full">
               <AttractionCard 
                 imageData={attraction.imageData}
                 linkUrl={attraction.linkUrl}
                 title={attraction.title}
                 shortDescription={attraction.shortDescription}
               />
             </div>
           ))}
         </Carousel>
        )} />
      </Routes>
    </>
  )
}

export default App
