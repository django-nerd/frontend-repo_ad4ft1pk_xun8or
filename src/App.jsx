import React from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import WireframeSections from './components/WireframeSections.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavigationBar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <HeroSpline />
        <WireframeSections />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
