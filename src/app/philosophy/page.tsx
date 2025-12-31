'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HandshakeIcon, TempleIcon, GrowthIcon } from '@/components/SatoriIcons';

const philosophyPrinciples = [
  {
    title: "Satori",
    subtitle: "Japanese for 'Enlightenment'",
    description: "The moment of sudden understanding and awakening. In our spaces, we create environments where clarity emerges naturally, where the mind finds peace amidst the complexities of modern life.",
    image: "/sato.jpg"
  },
  {
    title: "Santé",
    subtitle: "French for 'Health & Well-being'",
    description: "A toast to vitality, wellness, and the celebration of life's finest moments. We create spaces that nurture both body and spirit, where every experience contributes to your holistic well-being.",
    image: "/casa.jpg"
  }
];

const brandValues = [
  {
    principle: "Luxury is Stillness",
    description: "True luxury isn't found in excess or noise, but in the profound peace that comes from perfectly curated spaces where every element serves a purpose."
  },
  {
    principle: "Meaning Over Matter",
    description: "We choose quality over quantity, intention over impulse. Every piece, every experience, every moment is thoughtfully selected for its ability to create lasting impact."
  },
  {
    principle: "Harmony with Nature",
    description: "Our designs don't dominate the landscape; they dance with it. We believe in creating spaces that enhance the natural world rather than overshadowing it."
  },
  {
    principle: "Cultural Reverence",
    description: "We honor the places we inhabit and the communities we serve, creating bridges between cultures while respecting the authentic spirit of each location."
  },
  {
    principle: "Sustainable Elegance",
    description: "Environmental consciousness and refined aesthetics are not opposing forces. We prove that sustainable practices can elevate rather than compromise the luxury experience."
  },
  {
    principle: "Mindful Hospitality",
    description: "Service that anticipates needs without intruding, creates comfort without complication, and fosters connection without obligation."
  }
];

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/philo.jpg"
            alt="Satori Santé Philosophy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-brown/40"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center text-ivory px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="satori-heading text-5xl md:text-7xl mb-8">
            Our Philosophy
          </h1>
          <blockquote className="satori-text text-2xl md:text-3xl max-w-4xl mx-auto italic text-ivory/95 leading-relaxed">
            &ldquo;Luxury is not noise. It is stillness.<br />
            It is not excess. It is meaning.&rdquo;
          </blockquote>
        </motion.div>
      </section>

      {/* Brand DNA Section */}
      <section className="satori-section bg-ivory">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-8">
              The Fusion Philosophy
            </h2>
            <p className="satori-text text-lg max-w-4xl mx-auto leading-relaxed">
              Satori Santé was born from the marriage of two powerful concepts: the Japanese principle
              of enlightenment and the French celebration of well-being. This fusion creates something
              entirely new—spaces that are both profound and invigorating, sophisticated and soulful.
            </p>
          </motion.div>

          <div className="space-y-20">
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="satori-heading text-4xl mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-copper font-medium text-lg mb-6">
                    {principle.subtitle}
                  </p>
                  <p className="satori-text text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className={`relative h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="satori-section bg-champagne-gold/10">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-8">
              Our Guiding Principles
            </h2>
            <p className="satori-text text-lg max-w-3xl mx-auto">
              These principles shape every decision we make, from the selection of a single piece 
              of furniture to the design of entire experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandValues.map((value, index) => (
              <motion.div
                key={value.principle}
                className="satori-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="satori-heading text-xl mb-4 text-copper">
                  {value.principle}
                </h3>
                <p className="satori-text leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="satori-section bg-ivory">
        <div className="satori-container">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="satori-heading text-4xl mb-6">
                Beyond Hospitality
              </h2>
              <p className="satori-text text-lg mb-6 leading-relaxed">
                We don't simply provide services; we curate transformational experiences. 
                Every touchpoint is designed to contribute to a larger narrative—your personal 
                journey toward clarity, connection, and renewal.
              </p>
              <p className="satori-text text-lg mb-6 leading-relaxed">
                Whether you're sipping whiskey by our fireplace, meditating in an urban courtyard, 
                or watching the sunrise over Victoria Falls, you're participating in something 
                larger than accommodation. You're engaging with a philosophy that honors both 
                the profound and the beautiful.
              </p>
              <p className="satori-text text-lg leading-relaxed">
                This is the essence of Satori Santé: creating spaces where luxury and meaning
                converge, where every moment has the potential to become a moment of enlightenment.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/hospi.jpg"
                alt="Satori Hospitality Experience"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="satori-section bg-dark-brown text-ivory">
        <div className="satori-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-12 text-ivory">
              Our Vision for the Future
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="satori-text text-lg leading-relaxed text-ivory/95">
                We envision a world where luxury travel becomes a force for positive transformation—
                both for the individual and for the communities we touch. Our properties serve as 
                bridges between cultures, catalysts for understanding, and sanctuaries for renewal.
              </p>
              <p className="satori-text text-lg leading-relaxed text-ivory/95">
                As we expand, we remain committed to our core philosophy: that true luxury lies 
                not in excess, but in the thoughtful curation of meaningful experiences. Each new 
                location will honor this principle while celebrating the unique character of its place.
              </p>
              <blockquote className="satori-text text-xl italic text-champagne-gold leading-relaxed border-l-4 border-champagne-gold pl-6 mt-12">
                "In every space we create, we plant seeds of enlightenment. 
                Our guests don't just visit; they return home transformed."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Integration */}
      <section className="satori-section bg-champagne-gold/20">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-8">
              Honoring Place and People
            </h2>
            <p className="satori-text text-lg max-w-3xl mx-auto">
              Our philosophy extends beyond beautiful spaces to embrace the communities and 
              cultures that give each location its soul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Partnership",
                description: "We collaborate with local artisans, suppliers, and cultural leaders to ensure our presence enriches rather than disrupts existing communities.",
                icon: HandshakeIcon
              },
              {
                title: "Cultural Preservation",
                description: "Through our cultural storytelling programs, we help preserve and share traditional knowledge and practices with respectful authenticity.",
                icon: TempleIcon
              },
              {
                title: "Economic Impact",
                description: "Our model prioritizes local hiring, sourcing, and partnership, ensuring that our success directly benefits the communities we join.",
                icon: GrowthIcon
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="satori-card text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex justify-center">
                  <item.icon className="text-copper" size={48} />
                </div>
                <h3 className="satori-heading text-xl mb-4">{item.title}</h3>
                <p className="satori-text">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="satori-section bg-ivory">
        <div className="satori-container text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-8">
              Welcome to The Enlightened Home
            </h2>
            <p className="satori-text text-lg leading-relaxed mb-8">
              This is our invitation to you: to step away from the noise of the everyday and 
              into spaces designed for reflection, connection, and renewal. To experience luxury 
              not as consumption, but as transformation. To discover that home isn't just where 
              you live, but where you become who you're meant to be.
            </p>
            <blockquote className="satori-heading text-2xl italic text-copper">
              "Every journey with us is a journey home to yourself."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}