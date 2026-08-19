import { Link } from 'react-router-dom';

const Hero = ({ onOpenAuth }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 border-b-4 border-black pb-4">
            Build Faster with Our Design System
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Accelerate your development with our comprehensive component library and neobrutalist aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenAuth}
              className="px-6 py-3 bg-black text-white font-bold border-4 border-black hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
            <Link
              to="/components"
              className="px-6 py-3 bg-white text-black font-bold border-4 border-black hover:bg-gray-100 transition-colors"
            >
              View Components
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center border-b-4 border-black pb-4">
          Our Design System Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border-4 border-black bg-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Components</h3>
            <p className="text-gray-700">
              Pre-built, production-ready components that follow our neobrutalist aesthetic.
            </p>
          </div>
          <div className="p-6 border-4 border-black bg-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Theming</h3>
            <p className="text-gray-700">
              Customizable themes to match your brand identity.
            </p>
          </div>
          <div className="p-6 border-4 border-black bg-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray-700">
              Comprehensive documentation to help you get started quickly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
