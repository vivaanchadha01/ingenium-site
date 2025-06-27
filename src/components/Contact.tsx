/* src/components/Contact.tsx */

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, User, MessageSquare, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  /* ------------ state & refs ------------ */
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    collaborationType: 'general'
  });

  /* ------------ handlers ------------ */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            collaborationType: 'general'
          });
        },
        (error) => {
          console.error('EmailJS error →', error);
          alert('There was an error. Please try again.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  /* ------------ JSX ------------ */
  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* === Left info panel === */}
          <div className="space-y-8">
            <header>
              <h2 className="text-4xl font-bold text-white mb-6">
                Let&apos;s <span className="text-primary-500">Collaborate</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to tackle engineering challenges together? Whether you&apos;re a mentor,
                fellow innovator, or potential sponsor, I&apos;d love to hear from you.
              </p>
            </header>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">chadhavivaan007@gmail.com</p>
                  <p className="text-sm text-gray-500">Best for detailed discussion</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-400/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Quick Response</h3>
                  <p className="text-gray-400">Typically within 24 h</p>
                  <p className="text-sm text-gray-500">For time-sensitive queries</p>
                </div>
              </div>
            </div>

            {/* Looking-for list */}
            <div className="bg-dark-200 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Looking for:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Technical mentors & advisors</li>
                <li>• Student collaborators</li>
                <li>• Sponsors & funding partners</li>
                <li>• Industry connections</li>
              </ul>
            </div>
          </div>

          {/* === Contact form === */}
          <div className="bg-dark-200 rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Collaboration Type */}
              <div>
                <label htmlFor="collaborationType" className="block text-sm text-gray-300 mb-2">
                  Collaboration Type
                </label>
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
                  <option value="sponsorship">Sponsorship / Funding</option>
                  <option value="media">Media / Press</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-300 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your idea..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-dark-400 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
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
