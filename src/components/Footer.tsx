'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-dark-brown text-ivory overflow-hidden pt-24 pb-12">
      {/* Watermark Background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="font-display text-[25vw] leading-none text-ivory">SATORI</span>
      </div>

      <div className="satori-container relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 md:mb-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase mb-4 md:mb-6">Satori Santé</h2>
            </Link>
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl italic text-ivory/80 max-w-md leading-relaxed">
              &ldquo;Luxury is not noise. It is stillness. It is not excess. It is meaning.&rdquo;
            </blockquote>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-8 text-champagne-gold">Compass</h4>
            <ul className="space-y-4">
              {[
                { label: 'The Lounge', href: '/lounge' },
                { label: 'Philosophy', href: '/philosophy' },
                { label: 'Philanthropy', href: '/philanthropy' },
                { label: 'Become a Member', href: '/membership' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="satori-body text-ivory/70 hover:text-ivory transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-8 text-champagne-gold">Contact</h4>
            <ul className="space-y-6">
              <li>
                <p className="font-display text-xs uppercase opacity-50 mb-1">Location</p>
                <p className="satori-body text-ivory/80">M71 &, Posthouse St, Bryanston, Sandton, 2191</p>
              </li>
              <li>
                <p className="font-display text-xs uppercase opacity-50 mb-1">Say Hello</p>
                <a href="mailto:hello@satorisante.com" className="satori-body text-ivory/80 hover:text-ivory transition-colors">hello@satorisante.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-ivory/40 font-sans tracking-wide">
          <p>© {new Date().getFullYear()} Satori Santé Group.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-ivory transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}