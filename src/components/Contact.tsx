import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, User, MessageSquare, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaborationType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm('service_n11rsxd', 'template_gd7h9ja', formRef.current, 'C92a2kAW49mvAntQj')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          collaborationType: 'general'
        });
      })
      .catch((error) => {
        alert('Failed to send. Try again later.');
        console.error(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's <span className="text-primary-500">Collaborate</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to tackle engineering challenges together? Whether you're a mentor,
                fellow innovator, or potential sponsor, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">chadhavivaan007@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">Best for detailed discussions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-400">Reply in 24 hours</p>
                  <p className="text-sm text-gray-500 mt-1">Perfect for urgent queries</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Looking for:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Technical mentors</li>
                <li>• Student collaborators</li>
                <li>• Sponsors & partners</li>
                <li>• Industry connections</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-200 rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-300 mb-2 block">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-gray-300 mb-2 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="collaborationType" className="text-sm text-gray-300 mb-2 block">Collaboration Type</label>
                <select
                  id="collaborationType"
                  name="collaborationType"
                  value={formData.collaborationType}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white"
                >
                  <option value="general">General Inquiry</option>
                  <option value="mentor">Mentorship</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="sponsorship">Sponsorship/Funding</option>
                  <option value="media">Media/Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-gray-300 mb-2 block">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me how we can collaborate..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-400"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
