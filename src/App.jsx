import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JastipOrderFormMobile from './pages/JastipOrderFormMobile';
import ThirtyspaceTableShowcase from './pages/ThirtyspaceTableShowcase';
import JastipHomeScreenMobile from './pages/JastipHomeScreenMobile';
import ThirtyspaceHeroSection from './pages/ThirtyspaceHeroSection';
import ThirtyspaceSidebarShowcase from './pages/ThirtyspaceSidebarShowcase';
import JastipCatalogJepangTrip1 from './pages/JastipCatalogJepangTrip1';
import ThirtyspaceLoaderShowcase from './pages/ThirtyspaceLoaderShowcase';
import ThirtyspaceLoginRegisterMobile from './pages/ThirtyspaceLoginRegisterMobile';
import ThirtyspaceBadgeShowcase from './pages/ThirtyspaceBadgeShowcase';
import Thirtyspace404NavigationBentoVariant from './pages/Thirtyspace404NavigationBentoVariant';
import JastipCatalogJepangTrip2 from './pages/JastipCatalogJepangTrip2';
import ThirtyspaceButtonShowcase from './pages/ThirtyspaceButtonShowcase';
import ThirtyspaceComponentShowcaseInputs from './pages/ThirtyspaceComponentShowcaseInputs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JastipOrderFormMobile />} />
<Route path='/jastip-order-form-mobile' element={<JastipOrderFormMobile />} />
<Route path='/thirtyspace-table-showcase' element={<ThirtyspaceTableShowcase />} />
<Route path='/jastip-home-screen-mobile' element={<JastipHomeScreenMobile />} />
<Route path='/thirtyspace-hero-section' element={<ThirtyspaceHeroSection />} />
<Route path='/thirtyspace-sidebar-showcase' element={<ThirtyspaceSidebarShowcase />} />
<Route path='/jastip-catalog-jepang-trip-1' element={<JastipCatalogJepangTrip1 />} />
<Route path='/thirtyspace-loader-showcase' element={<ThirtyspaceLoaderShowcase />} />
<Route path='/thirtyspace-login-register-mobile' element={<ThirtyspaceLoginRegisterMobile />} />
<Route path='/thirtyspace-badge-showcase' element={<ThirtyspaceBadgeShowcase />} />
<Route path='/thirtyspace-404-navigation-bento-variant' element={<Thirtyspace404NavigationBentoVariant />} />
<Route path='/jastip-catalog-jepang-trip-2' element={<JastipCatalogJepangTrip2 />} />
<Route path='/thirtyspace-button-showcase' element={<ThirtyspaceButtonShowcase />} />
<Route path='/thirtyspace-component-showcase-inputs' element={<ThirtyspaceComponentShowcaseInputs />} />
        <Route path="*" element={<JastipOrderFormMobile />} />
      </Routes>
    </BrowserRouter>
  );
}
