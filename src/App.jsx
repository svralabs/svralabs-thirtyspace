import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ThirtyspaceTableShowcase />} />
<Route path='/thirtyspace-table-showcase' element={<ThirtyspaceTableShowcase />} />
<Route path='/thirtyspace-sidebar-showcase' element={<ThirtyspaceSidebarShowcase />} />
<Route path='/thirtyspace-login-register-mobile' element={<ThirtyspaceLoginRegisterMobile />} />
<Route path='/thirtyspace-loader-showcase' element={<ThirtyspaceLoaderShowcase />} />
<Route path='/thirtyspace-hero-section' element={<ThirtyspaceHeroSection />} />
<Route path='/thirtyspace-component-showcase-inputs' element={<ThirtyspaceComponentShowcaseInputs />} />
<Route path='/thirtyspace-button-showcase' element={<ThirtyspaceButtonShowcase />} />
<Route path='/thirtyspace-badge-showcase' element={<ThirtyspaceBadgeShowcase />} />
<Route path='/thirtyspace-404-navigation-bento-variant' element={<Thirtyspace404NavigationBentoVariant />} />
<Route path='/jastip-order-form-mobile' element={<JastipOrderFormMobile />} />
<Route path='/jastip-home-screen-mobile' element={<JastipHomeScreenMobile />} />
<Route path='/jastip-catalog-jepang-trip-2' element={<JastipCatalogJepangTrip2 />} />
<Route path='/jastip-catalog-jepang-trip-1' element={<JastipCatalogJepangTrip1 />} />
        <Route path="*" element={<ThirtyspaceTableShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}
