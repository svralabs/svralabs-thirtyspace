import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthModal from './components/AuthModal';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import Components from './pages/Components';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import Hero from './pages/Hero';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        <AuthModal />
        <ThirtyspaceLoaderShowcase />
        <ThirtyspaceComponentShowcaseInputs />
        <ThirtyspaceButtonShowcase />
        <ThirtyspaceTableShowcase />
        <JastipCatalogJepangTrip1 />
        <Thirtyspace404NavigationBentoVariant />
        <JastipOrderFormMobile />
        <ThirtyspaceBadgeShowcase />
        <Components />
        <JastipCatalogJepangTrip2 />
        <JastipHomeScreenMobile />
        <Hero />
        <ThirtyspaceSidebarShowcase />
        <ThirtyspaceHeroSection />
        <ThirtyspaceLoginRegisterMobile />
      </div>
    </BrowserRouter>
  );
}
