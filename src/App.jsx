import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Hero from './pages/Hero';
import Components from './pages/Components';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <nav className="border-b-4 border-black bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">SVRALABS</div>
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/components"
                className={({ isActive }) =>
                  isActive ? 'text-blue-500 font-bold' : 'text-black'
                }
              >
                Components
              </NavLink>
            </div>
            <button
              onClick={() => setAuthModalOpen(true)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero openAuthModal={() => setAuthModalOpen(true)} />} />
            <Route path="/components" element={<Components />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto p-4">
                  <div className="bg-white border-4 border-black p-8">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
                    <NavLink
                      to="/"
                      className="bg-black text-white px-4 py-2 rounded"
                    >
                      Go Back Home
                    </NavLink>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
      </div>
    </BrowserRouter>
  );
}
