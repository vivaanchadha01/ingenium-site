import React from 'react';
import { Award, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-dark-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-primary-500 font-bold">VC</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet the <span className="text-primary-500">Founder</span>
              </h2>
              <h3 className="text-2xl text-gray-300 mb-6">Vivaan Chadha</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a passionate student engineer dedicated to transforming real-world challenges into 
                innovative, sustainable solutions. The Ingenium Project represents my commitment to 
                creating low-cost, high-impact engineering solutions that can make a meaningful difference 
                in our communities and environment.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From urban noise pollution to sustainable farming practices, I believe that with the right 
                approach and determination, we can engineer solutions that address some of our most pressing challenges.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-dark-200 rounded-lg hover:bg-dark-100 transition-colors duration-300">
                <Target className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Creative solutions to complex problems</p>
              </div>
              <div className="text-center p-6 bg-dark-200 rounded-lg hover:bg-dark-100 transition-colors duration-300">
                <Award className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Impact</h4>
                <p className="text-gray-400 text-sm">Meaningful change through engineering</p>
              </div>
              <div className="text-center p-6 bg-dark-200 rounded-lg hover:bg-dark-100 transition-colors duration-300">
                <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">Building solutions together</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;