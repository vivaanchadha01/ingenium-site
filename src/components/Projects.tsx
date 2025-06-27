import React from 'react';
import { Bone as Drone, Wind, Flame, Sprout, Zap, ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  status: 'completed' | 'in-progress' | 'concept';
  icon: React.ReactNode;
  tags: string[];
  impact: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'noise-mapping',
      title: 'Urban Noise Mapping with UAVs',
      description: 'Drone-mounted sensors to map real-time urban noise and inform policy decisions.',
      longDescription: 'Advanced UAV system equipped with precision acoustic sensors to create comprehensive noise pollution maps of urban areas, providing actionable data for city planners and environmental agencies.',
      status: 'completed',
      icon: <Drone className="w-8 h-8" />,
      tags: ['UAV', 'IoT', 'Environmental', 'Data Analytics'],
      impact: 'Real-time urban noise monitoring for 10+ city blocks'
    },
    {
      id: 'aqi-display',
      title: 'Smart AQI Display System',
      description: 'Solar-powered air quality monitors for schools and public spaces with live displays.',
      longDescription: 'Autonomous air quality monitoring stations featuring solar power systems, real-time displays, and wireless connectivity to provide communities with immediate access to air quality information.',
      status: 'completed',
      icon: <Wind className="w-8 h-8" />,
      tags: ['IoT', 'Solar', 'Public Health', 'Display Systems'],
      impact: 'Deployed in 5 schools, monitoring air quality for 2000+ students'
    },
    {
      id: 'tlud-cookstove',
      title: 'TLUD Cookstove Solution',
      description: 'Clean-burning biomass stove that produces biochar instead of harmful smoke.',
      longDescription: 'Top-Lit Up-Draft cookstove design that eliminates stubble burning while producing valuable biochar, addressing both air pollution and agricultural waste management.',
      status: 'completed',
      icon: <Flame className="w-8 h-8" />,
      tags: ['Biomass', 'Agriculture', 'Clean Energy', 'Sustainability'],
      impact: 'Reduced smoke emissions by 90%, produces 2kg biochar daily'
    },
    {
      id: 'drone-farming',
      title: 'Drone-Assisted Sustainable Farming',
      description: 'Precision pesticide-free farming using advanced UAV technology in Punjab.',
      longDescription: 'Comprehensive drone-based farming system utilizing computer vision and precision agriculture techniques to optimize crop health without harmful pesticides.',
      status: 'in-progress',
      icon: <Sprout className="w-8 h-8" />,
      tags: ['Precision Agriculture', 'Computer Vision', 'Sustainability', 'UAV'],
      impact: 'Target: 100 acres pesticide-free farming coverage'
    },
    {
      id: 'pollution-streetlights',
      title: 'Pollution-Mitigating Streetlights',
      description: 'Streetlight-based mist systems to reduce dust and particulate matter exposure.',
      longDescription: 'Innovative integration of pollution mitigation technology into existing street lighting infrastructure, using fine mist systems to capture airborne particles and improve local air quality.',
      status: 'concept',
      icon: <Zap className="w-8 h-8" />,
      tags: ['Smart Cities', 'Air Purification', 'Infrastructure', 'IoT'],
      impact: 'Potential: 30% reduction in local particulate matter'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'concept': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'concept': return <AlertCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'concept': return 'Concept Phase';
      default: return '';
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engineering solutions that address real-world challenges, from environmental monitoring 
            to sustainable agriculture and clean energy systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-dark-200 rounded-xl p-6 hover:bg-dark-100 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10 border border-transparent hover:border-primary-500/20"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Status Badge */}
              <div className={`flex items-center gap-2 mb-4 ${getStatusColor(project.status)}`}>
                {getStatusIcon(project.status)}
                <span className="text-sm font-medium">{getStatusText(project.status)}</span>
              </div>

              {/* Icon */}
              <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="bg-primary-500/10 text-primary-500 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div className="mb-6">
                <p className="text-accent-400 text-sm font-medium">Impact:</p>
                <p className="text-gray-300 text-sm">{project.impact}</p>
              </div>

              {/* CTA */}
              <button className="group/btn flex items-center gap-2 text-primary-500 hover:text-white transition-colors duration-200">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl border border-primary-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Have an Engineering Challenge?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next project. From concept to prototype, 
            we can work together to create innovative solutions.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;