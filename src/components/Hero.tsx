import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-dark-400 relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center animate-pulse-glow">
              <Zap className="w-10 h-10 text-dark-400" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
            From Problem to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">
              Prototype
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Student-led engineering solutions tackling real-world challenges through innovative design and sustainable technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300"
            >
              Meet the Founder
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">5+</div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">3</div>
              <div className="text-gray-400 text-sm">Prototypes Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">100%</div>
              <div className="text-gray-400 text-sm">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">2024</div>
              <div className="text-gray-400 text-sm">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;