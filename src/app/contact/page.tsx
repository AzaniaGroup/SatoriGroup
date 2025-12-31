'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_back.jpg"
            alt="Contact Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/80 via-dark-brown/60 to-dark-brown/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="satori-caption text-champagne-gold mb-6">GET IN TOUCH</p>
            <h1 className="satori-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-ivory leading-tight">
              Connect with Satori
            </h1>
            <p className="satori-body text-lg sm:text-xl md:text-2xl text-ivory/90 max-w-2xl mx-auto">
              Begin your journey to The Enlightened Home. We're here to guide you through our world of refined experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="satori-section-enhanced bg-ivory">
        <div className="satori-content-width px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="satori-headline text-3xl md:text-4xl mb-8 text-dark-brown">
                Let's Start a Conversation
              </h2>
              <p className="satori-body text-lg mb-12 max-w-lg">
                Whether you're seeking tranquility at our lounge, planning an urban retreat, or dreaming of a villa escape, we're here to make it extraordinary.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Visit Us</h3>
                  <div className="space-y-2">
                    <p className="satori-body">Satori Santé, The Lounge</p>
                    <p className="satori-body">M71 &, Posthouse St, Bryanston</p>
                    <p className="satori-body">Sandton, 2191</p>
                  </div>
                </div>

                <div>
                  <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Reach Us</h3>
                  <div className="space-y-2">
                    <p className="satori-body">
                      <a href="tel:+27113456789" className="hover:text-copper transition-colors">
                        +27 11 345 6789
                      </a>
                    </p>
                    <p className="satori-body">
                      <a href="mailto:hello@satorisucasa.com" className="hover:text-copper transition-colors">
                        hello@satorisucasa.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Hours</h3>
                  <div className="space-y-2">
                    <p className="satori-body">Monday - Friday: 4:00 PM - 12:00 AM</p>
                    <p className="satori-body">Saturday - Sunday: 2:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="satori-body text-dark-brown mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="satori-body text-dark-brown mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="satori-body text-dark-brown mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-copper/30 focus:border-copper"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="satori-body text-dark-brown mb-2 block">
                    I'm Interested In
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body"
                  >
                    <option value="">Select an option</option>
                    <option value="lounge">Satori Sandton - The Lounge</option>

                    <option value="events">Private Events & Functions</option>
                    <option value="memberships">Memberships & Partnerships</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="satori-body text-dark-brown mb-2 block">
                    Message *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body resize-vertical"
                    placeholder="Tell us about your vision for the perfect enlightened experience..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="satori-button-filled w-full text-center justify-center"
                >
                  Send Message
                </Button>

                <p className="satori-caption text-charcoal/70 text-center">
                  We'll respond within 24 hours to begin crafting your perfect experience.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="satori-section-enhanced" style={{ backgroundColor: 'rgba(224, 169, 109, 0.1)' }}>
        <div className="satori-content-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="satori-body text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed text-dark-brown">
              <span className="text-copper text-6xl leading-none">&ldquo;</span>
              Every conversation begins with curiosity.<br />
              Every relationship starts with respect.<br />
              Every experience begins with welcome.
              <span className="text-copper text-6xl leading-none">&rdquo;</span>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}