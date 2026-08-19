import { useState } from 'react';
import Hero from './pages/Hero';
import Components from './pages/Components';
import AuthModal from './components/AuthModal';

export default function App() {
  const [currentView, setCurrentView] = useState('hero');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">ThirtySpace</span>
          <button
            onClick={() => setCurrentView('hero')}
            className="text-lg font-medium hover:underline"
          >
            Hero
          </button>
          <button
            onClick={() => setCurrentView('components')}
            className="text-lg font-medium hover:underline"
          >
            Components
          </button>
        </div>
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-none hover:bg-gray-800"
        >
          Login
        </button>
      </nav>

      <main className="flex-grow">
        {currentView === 'hero' ? <Hero /> : <Components />}
      </main>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
