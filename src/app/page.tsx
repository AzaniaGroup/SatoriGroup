'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lounge.jpg"
            alt="Satori Private Lounge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark-brown/40" />
        </div>

        <div className="satori-container relative z-10 text-center text-ivory mt-16 md:mt-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Using the text image logo here as well for consistency if desired, or just text */}
            <div className="relative w-48 h-20 sm:w-64 sm:h-24 md:w-96 md:h-32 mx-auto mb-6">
              <Image
                src="/SS_Trnspt.png"
                alt="Satori Logo"
                fill
                className="object-contain brightness-0 invert drop-shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-champagne-gold">
              The Members Club
            </h2>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-wider text-ivory px-4">
              SATORI SANTÉ
            </h1>
            <p className="font-serif text-base sm:text-lg md:text-xl md:max-w-2xl mx-auto italic opacity-90 mb-12 leading-relaxed px-4">
              "Refinement is not about adding more. <br className="hidden md:block" /> It is about stripping away the non-essential until only the truth remains."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link href="/lounge">
                <button className="satori-button-filled border-copper bg-copper text-ivory hover:bg-transparent hover:text-ivory w-full sm:min-w-[200px]">
                  The Lounge
                </button>
              </Link>
              <Link href="/philosophy">
                <button className="satori-button-outline text-ivory border-ivory w-full sm:min-w-[200px]">
                  Our Philosophy
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 01: The Lounge - Asymmetric Layout */}
      <section className="satori-section-enhanced bg-background text-foreground overflow-hidden">
        <div className="satori-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Left Aligned */}
            <motion.div
              className="lg:col-span-4 lg:col-start-2 z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-6xl md:text-8xl text-copper/10 absolute -top-20 -left-10 md:-left-20">01</span>
              <h3 className="satori-subhead text-copper mb-4">The Experience</h3>
              <h2 className="satori-headline text-4xl md:text-5xl mb-8">THE LOUNGE</h2>
              <p className="satori-body mb-8 text-lg">
                An exclusive sanctuary in the heart of Sandton. Satori Santé is not just a place; it is a feeling. A curated space where time slows down, and every detail — from the lighting to the scent — is designed to calm the mind and elevate the spirit.
              </p>
              <Link href="/lounge">
                <button className="satori-button-outline border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-ivory">
                  Explore The Lounge
                </button>
              </Link>
            </motion.div>

            {/* Image - Right Aligned & Larger */}
            <motion.div
              className="lg:col-span-7 lg:col-start-6 relative h-[600px] w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-copper/5 transform translate-x-4 translate-y-4 -z-10" />
              <Image
                src="/lounge.jpg"
                alt="The Lounge Interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 02: Philosophy - Reversed Asymmetry */}
      <section className="satori-section-enhanced bg-muted/30 text-foreground overflow-hidden">
        <div className="satori-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image - Left Aligned */}
            <motion.div
              className="lg:col-span-6 relative h-[700px] w-full order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/hero_back.jpg" // Reusing hero image or another subtle texture
                alt="Satori Philosophy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark-brown/20" />
            </motion.div>

            {/* Text Content - Right Aligned */}
            <motion.div
              className="lg:col-span-5 lg:col-start-8 z-10 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-6xl md:text-8xl text-copper/10 absolute -top-16 -right-0">02</span>
              <h3 className="satori-subhead text-copper mb-4">Our Essence</h3>
              <h2 className="satori-headline text-4xl md:text-5xl mb-8">THE PHILOSOPHY</h2>
              <p className="satori-body mb-8 text-lg">
                We believe that true luxury is found in stillness. In a world of constant noise, we offer silence. In a culture of excess, we offer meaning. Satori is the moment of awakening — seeing your true nature.
              </p>
              <blockquote className="satori-body italic text-xl border-l-2 border-champagne-gold pl-6 mb-8 text-dark-brown/80">
                “Where East meets West in Africa. Global calm with African soul.”
              </blockquote>
              <Link href="/philosophy">
                <button className="satori-button-elegant text-dark-brown border-dark-brown hover:bg-dark-brown hover:text-ivory">
                  Read Our Story
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 03: Philanthropy (New) - Center Focus with Parallax feel */}
      <section className="satori-section-enhanced bg-dark-brown text-ivory relative">
        <div className="absolute inset-0 opacity-10">
          {/* Pattern or Texture overlay could go here */}
        </div>
        <div className="satori-container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-4xl text-champagne-gold/20 block mb-6">03</span>
            <h2 className="satori-headline text-5xl md:text-6xl mb-8 text-ivory">GIVING BACK</h2>
            <p className="font-serif text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
              We are committed to more than just luxury. We are committed to legacy. Through our philanthropic initiatives, we aim to bring light to those in the shadows.
            </p>
            <Link href="/philanthropy">
              <button className="satori-button-filled bg-champagne-gold text-dark-brown border-champagne-gold hover:bg-transparent hover:text-champagne-gold">
                Our Initiatives
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
