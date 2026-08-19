import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Thirtyspace
          </h1>
          <p className="text-xl md:text-2xl mb-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
            Revolutionize your workspace with our cutting-edge table management solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent text-black font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block p-2">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Workspace Management</h3>
            <p className="text-gray-700">Efficiently organize and manage your workspace with our intuitive table management system.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Collaboration Tools</h3>
            <p className="text-gray-700">Work together seamlessly with built-in collaboration features and real-time updates.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Customization</h3>
            <p className="text-gray-700">Personalize your workspace with customizable tables, layouts, and themes to suit your needs.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Analytics</h3>
            <p className="text-gray-700">Gain insights into your workspace productivity with detailed analytics and performance metrics.</p>
          </div>

          {/* Feature Card 5 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Integration</h3>
            <p className="text-gray-700">Seamlessly integrate with your existing tools and workflows for a unified experience.</p>
          </div>

          {/* Feature Card 6 */}
          <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-xl font-bold mb-4">Security</h3>
            <p className="text-gray-700">Protect your data with robust security features, including encryption and access controls.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
