'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const menuItems = [
  {
    category: "Tapas",
    items: [
      { name: "Aged Cheese Selection", description: "Curated selection of local and international cheeses" },
      { name: "Charcuterie Board", description: "Artisanal cured meats with accompaniments" },
      { name: "Truffle Mushroom Bruschetta", description: "Wild mushrooms on sourdough with truffle oil" },
      { name: "Smoked Salmon Canapés", description: "Norwegian salmon with cream cheese and dill" }
    ]
  },
  {
    category: "Warmed Plates",
    items: [
      { name: "Wagyu Beef Sliders", description: "Premium beef with aged cheddar and caramelized onions" },
      { name: "Pan-Seared Duck Breast", description: "With cherry reduction and wild rice" },
      { name: "Grilled Lamb Chops", description: "Herb-crusted with rosemary jus" },
      { name: "Seared Scallops", description: "With cauliflower purée and pancetta crisps" }
    ]
  }
];

export default function LoungePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lounge-interior.jpg"
            alt="Satori Sandton Lounge Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/70 to-dark-brown/40"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center text-ivory px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="satori-heading text-5xl md:text-7xl mb-6">
            After Work, Redefined.
          </h1>
          <p className="satori-text text-xl md:text-2xl max-w-3xl mx-auto text-ivory/90 mb-8">
            An intimate sanctuary where whiskey, wine, and conversation flow as freely as the jazz that fills the air.
          </p>
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button className="satori-button-primary text-lg px-12 py-4">
                Make a Reservation
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="satori-heading text-2xl">Reserve Your Experience</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p className="satori-text">
                  Please contact us directly to make your reservation at Satori Sandton.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Email:</p>
                  <p className="text-copper">reservations@satorisucasa.com</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Operating Hours:</p>
                  <p>Tuesday - Saturday: 5:00 PM - 12:00 AM</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Dress Code:</p>
                  <p>Smart Casual to Formal</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </section>

      {/* Experience Section */}
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
                The Ritual of Unwinding
              </h2>
              <p className="satori-text text-lg mb-6">
                Step into a world where time slows down and every detail has been crafted for your comfort. 
                Our 100-seater lounge features intimate private rooms, a crackling fireplace, and a carefully 
                curated selection of premium spirits and wines.
              </p>
              <p className="satori-text text-lg">
                Whether you're savoring a rare whiskey, enjoying a hand-rolled cigar from our humidor, 
                or simply losing yourself in conversation, every moment at Satori Sandton is designed 
                to elevate your evening.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/lounge-fireplace.jpg"
                alt="Fireplace at Satori Lounge"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="satori-section bg-champagne-gold/10">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-6">
              Crafted for Connection
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100 Seats",
                description: "Intimate seating arrangements for groups of all sizes",
                icon: "🪑"
              },
              {
                title: "Private Rooms",
                description: "Exclusive spaces for confidential conversations",
                icon: "🚪"
              },
              {
                title: "Fireplace Lounge",
                description: "Warm gathering space with crackling ambiance",
                icon: "🔥"
              },
              {
                title: "Cigar Humidor",
                description: "Premium hand-rolled cigars in perfect condition",
                icon: "🚬"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="satori-card text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="satori-heading text-xl mb-3">{feature.title}</h3>
                <p className="satori-text">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="satori-section bg-ivory">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-6">
              Chef-Curated Selections
            </h2>
            <p className="satori-text text-lg max-w-3xl mx-auto">
              Complement your evening with our expertly crafted small plates and warmed dishes, 
              designed to pair perfectly with our premium beverage selection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuItems.map((section, index) => (
              <motion.div
                key={section.category}
                className="satori-card"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="satori-heading text-2xl mb-6 text-copper">
                  {section.category}
                </h3>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <h4 className="font-semibold text-dark-brown mb-2">
                        {item.name}
                      </h4>
                      <p className="satori-text text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="satori-section bg-dark-brown text-ivory">
        <div className="satori-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-6 text-ivory">
              Experience the Atmosphere
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/lounge-bar.jpg',
              '/lounge-seating.jpg', 
              '/lounge-private-room.jpg',
              '/lounge-whiskey.jpg',
              '/lounge-ambiance.jpg',
              '/lounge-details.jpg'
            ].map((image, index) => (
              <motion.div
                key={image}
                className="relative h-64 overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image}
                  alt={`Satori Lounge ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info Section */}
      <section className="satori-section bg-champagne-gold/20">
        <div className="satori-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="satori-heading text-4xl mb-8">
              Join Us for an Unforgettable Evening
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">Reservations</h3>
                <p className="satori-text">Bookings Only - Walk-ins Subject to Availability</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Hours</h3>
                <p className="satori-text">Tuesday - Saturday<br />5:00 PM - 12:00 AM</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Dress Code</h3>
                <p className="satori-text">Smart Casual to Formal Attire</p>
              </div>
            </div>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="satori-button-primary text-lg px-12 py-4">
                  Reserve Your Table
                </Button>
              </DialogTrigger>
            </Dialog>
          </motion.div>
        </div>
      </section>
    </div>
  );
}