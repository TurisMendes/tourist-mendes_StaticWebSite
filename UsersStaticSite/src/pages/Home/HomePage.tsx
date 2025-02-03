import React from 'react';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import { Helmet } from 'react-helmet-async';
import AttractionsSection from '../../components/Sections/Home/AttractionsSection/AttractionsSection';
import AgentsSection from '../../components/Sections/Home/AgentsSection/AgentsSection';
import TrailsSection from '../../components/Sections/Home/TrailsSection/TrailsSection';
import EventsSection from '../../components/Sections/Home/EventsSections/EventsSections';
import ButtonBackToTop from '../../components/ButtonBackToTop/ButtonBackToTop';

function HomePage(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>TurisMendes | HOME</title>
        <meta
          name='description'
          content='Com o intuito de preservar o patrimônio e promover o turismo, o TurisMendes transforma a maneira como a cidade se apresenta ao mundo!' />
      </Helmet>
      <main className="relative flex flex-col items-center justify-center w-full">
        <BannerCarousel />
        <AttractionsSection />
        <AgentsSection />
        <TrailsSection />
        <EventsSection />
        <ButtonBackToTop />
      </main>
    </>
  );
}

export default HomePage;
