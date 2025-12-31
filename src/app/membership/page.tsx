'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Membership() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    company: '',
    membershipTier: '',
    hearAbout: '',
    interests: [] as string[],
    why: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Membership application submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        company: '',
        membershipTier: '',
        hearAbout: '',
        interests: [],
        why: '',
        additionalInfo: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-8"
        >
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-copper/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="satori-headline text-4xl mb-4 text-dark-brown">Application Received</h2>
            <p className="satori-body text-xl text-dark-brown/70 max-w-md mx-auto">
              Thank you for your interest in joining Satori Santé. We'll review your application and be in touch within 48 hours.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lounge.jpg"
            alt="Become a Member"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/85 via-dark-brown/70 to-dark-brown/85"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="satori-caption text-champagne-gold mb-4 sm:mb-6 tracking-[0.3em]">JOIN US</p>
            <h1 className="satori-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-ivory leading-tight">
              Become a Member
            </h1>
            <p className="satori-body text-lg sm:text-xl md:text-2xl text-ivory/90 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community where refinement meets belonging. Begin your journey to enlightened living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="satori-section-enhanced bg-ivory">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="satori-headline text-3xl md:text-4xl mb-6 text-dark-brown">
              Membership Application
            </h2>
            <p className="satori-body text-lg text-dark-brown/70 max-w-2xl mx-auto">
              Please take a moment to tell us about yourself. All information is kept strictly confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="satori-subhead text-xl mb-6 text-dark-brown border-b border-copper/20 pb-3">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="satori-body text-dark-brown mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="satori-body text-dark-brown mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
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

                  <div>
                    <Label htmlFor="phone" className="satori-body text-dark-brown mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>

                  <div>
                    <Label htmlFor="occupation" className="satori-body text-dark-brown mb-2 block">
                      Occupation *
                    </Label>
                    <Input
                      id="occupation"
                      name="occupation"
                      type="text"
                      required
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="satori-body text-dark-brown mb-2 block">
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-copper/30 focus:border-copper"
                    />
                  </div>
                </div>
              </div>

              {/* Membership Preferences */}
              <div>
                <h3 className="satori-subhead text-xl mb-6 text-dark-brown border-b border-copper/20 pb-3">
                  Membership Preferences
                </h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="membershipTier" className="satori-body text-dark-brown mb-2 block">
                      Preferred Membership Tier *
                    </Label>
                    <select
                      id="membershipTier"
                      name="membershipTier"
                      required
                      value={formData.membershipTier}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body"
                    >
                      <option value="">Select a tier</option>
                      <option value="essential">Essential - Lounge Access</option>
                      <option value="elevated">Elevated - Lounge + Urban Retreats</option>
                      <option value="enlightened">Enlightened - Full Access</option>
                    </select>
                  </div>

                  <div>
                    <Label className="satori-body text-dark-brown mb-3 block">
                      Areas of Interest (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Private Lounge Access',
                        'Cigar & Whiskey Tastings',
                        'Wellness & Mindfulness',
                        'Networking Events',
                        'Cultural Experiences',
                        'Philanthropic Initiatives'
                      ].map((interest) => (
                        <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckboxChange(interest)}
                            className="w-4 h-4 text-copper border-copper/30 rounded focus:ring-copper"
                          />
                          <span className="satori-body text-dark-brown/80">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hearAbout" className="satori-body text-dark-brown mb-2 block">
                      How did you hear about Satori Santé? *
                    </Label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      required
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body"
                    >
                      <option value="">Select an option</option>
                      <option value="referral">Referral from a member</option>
                      <option value="social">Social Media</option>
                      <option value="website">Website</option>
                      <option value="event">Event or Experience</option>
                      <option value="press">Press/Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* About You */}
              <div>
                <h3 className="satori-subhead text-xl mb-6 text-dark-brown border-b border-copper/20 pb-3">
                  Tell Us About Yourself
                </h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="why" className="satori-body text-dark-brown mb-2 block">
                      Why do you want to join Satori Santé? *
                    </Label>
                    <textarea
                      id="why"
                      name="why"
                      rows={4}
                      required
                      value={formData.why}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body resize-vertical"
                      placeholder="Share what draws you to our community..."
                    ></textarea>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="satori-body text-dark-brown mb-2 block">
                      Additional Information
                    </Label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-copper/30 rounded-md focus:outline-none focus:border-copper satori-body resize-vertical"
                      placeholder="Anything else you'd like us to know..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-copper/10">
                <Button
                  type="submit"
                  className="satori-button-filled bg-copper border-copper text-ivory hover:bg-transparent hover:text-copper w-full md:w-auto px-12 py-3 text-center justify-center"
                >
                  Submit Application
                </Button>

                <p className="satori-caption text-dark-brown/60 text-center md:text-left mt-4">
                  * Required fields. We'll review your application and contact you within 48 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="satori-section-enhanced bg-dark-brown text-ivory">
        <div className="satori-content-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="satori-body text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed italic">
              "Membership is not just access. It is belonging. <br className="hidden md:block" />
              It is finding your people. Your place. Your peace."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
