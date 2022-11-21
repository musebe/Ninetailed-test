import React from 'react';
import Analytics from './components/Analytics';
import Cta from './components/Cta';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { NinetailedProvider } from '@ninetailed/experience.js-react';
import useEntries from './components/contentful/useEntries';
import { BlockRenderer } from './components/contentful/Renderer';

function App() {
  const [entries, isLoading] = useEntries();
  return (
    <NinetailedProvider clientId={'005bdece-a11c-45b4-a21e-b566f8eeb489'}>
      <div>
        <BlockRenderer block={entries} />
        {/* <Cta /> */}
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </NinetailedProvider>
  );
}

export default App;
