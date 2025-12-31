'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-[6px] ${scrolled
            ? 'bg-background/85 backdrop-blur-xl py-2 shadow-sm border-b border-primary/5'
            : 'bg-background/20 py-3 border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="satori-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="block">
                <div className="relative h-16 w-48 sm:h-20 sm:w-64 lg:h-32 lg:w-[32rem]">
                  <Image
                    src="/SATORI_TXT_LOGO.png"
                    alt="Satori Sucasa"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {[
                { href: '/lounge', label: 'The Lounge' },
                { href: '/philosophy', label: 'Philosophy' },
                { href: '/philanthropy', label: 'Philanthropy' }
              ].map((item, index) => (
                <div key={item.href} className="relative group overflow-hidden">
                  <Link
                    href={item.href}
                    className="satori-subhead text-sm tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors duration-300 block py-2"
                  >
                    {item.label}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                </div>
              ))}

              <Link href="/membership">
                <button className="satori-button-filled bg-copper border-copper text-ivory hover:bg-transparent hover:text-copper text-xs tracking-[0.25em] py-2 px-6 ml-4 transition-all duration-300">
                  Become Member
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-8 flex flex-col gap-1.5 items-end">
                <span className={`bg-primary block h-[2px] w-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`bg-primary block h-[2px] w-2/3 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-primary block h-[2px] w-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-40 flex items-center justify-center lg:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/lounge', label: 'The Lounge' },
                { href: '/philosophy', label: 'Philosophy' },
                { href: '/philanthropy', label: 'Philanthropy' },
                { href: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl text-primary hover:text-accent transition-colors tracking-widest uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            {/* Watermark in Menu */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
              <h1 className="font-display text-[20vw] leading-none text-primary whitespace-nowrap">SATORI</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}