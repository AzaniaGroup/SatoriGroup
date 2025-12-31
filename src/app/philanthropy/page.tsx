'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HandshakeIcon, GrowthIcon, TempleIcon } from '@/components/SatoriIcons';

const philanthropyInitiatives = [
    {
        title: "Community Empowerment",
        description: "We believe in the power of local communities. Our initiatives focus on providing resources, education, and opportunities to empower individuals and families to thrive.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Sustainable Futures",
        description: "Protecting our environment is paramount. We support projects that promote sustainable practices, conservation, and eco-friendly innovation to ensure a healthier planet for future generations.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Cultural Preservation",
        description: "Honoring heritage and tradition. We invest in programs that preserve cultural arts, crafts, and storytelling, ensuring that the rich tapestry of our history remains vibrant.",
        image: "/tradional.jpg"
    }
];

export default function PhilanthropyPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/village.jpg"
                        alt="Satori Philanthropy - Giving Back"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-dark-brown/50"></div>
                </div>

                <motion.div
                    className="relative z-10 text-center text-ivory px-4 mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-4 sm:mb-6 inline-block border-b border-champagne-gold pb-2">
                        <span className="satori-caption text-champagne-gold tracking-widest uppercase">Giving Back</span>
                    </div>
                    <h1 className="satori-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 text-ivory">
                        The Satori Foundation
                    </h1>
                    <p className="satori-text text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-ivory/90 leading-relaxed">
                        Extending the spirit of 'Santé' beyond our walls. <br />
                        Creating a legacy of compassion, connection, and positive impact.
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="satori-section bg-ivory">
                <div className="satori-container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="satori-heading text-4xl mb-8 text-dark-brown">
                            Our Mission
                        </h2>
                        <blockquote className="satori-text text-2xl md:text-3xl max-w-4xl mx-auto italic text-dark-brown/80 leading-relaxed">
                            &ldquo;True wealth is the ability to give. True enlightenment is the desire to serve.&rdquo;
                        </blockquote>
                        <p className="satori-text text-lg max-w-4xl mx-auto mt-8 leading-relaxed text-dark-brown/70">
                            At Satori Santé, we believe that luxury and responsibility go hand in hand.
                            The Satori Foundation is our commitment to uplifting the communities that host us
                            and preserving the environments that inspire us. We dedicate a portion of our
                            revenue and resources to meaningful causes that align with our philosophy of
                            balance, harmony, and well-being.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="satori-card text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center mb-6 text-copper">
                                <HandshakeIcon size={48} />
                            </div>
                            <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Connection</h3>
                            <p className="satori-text text-dark-brown/70">Building bridges between our members and local communities through shared experiences and support.</p>
                        </motion.div>
                        <motion.div
                            className="satori-card text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center mb-6 text-copper">
                                <GrowthIcon size={48} />
                            </div>
                            <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Growth</h3>
                            <p className="satori-text text-dark-brown/70">Fostering sustainable development that allows communities to grow and prosper on their own terms.</p>
                        </motion.div>
                        <motion.div
                            className="satori-card text-center p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center mb-6 text-copper">
                                <TempleIcon size={48} />
                            </div>
                            <h3 className="satori-subhead text-xl mb-4 text-dark-brown">Honor</h3>
                            <p className="satori-text text-dark-brown/70">Respecting the dignity of every individual and the sanctity of the natural world we share.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Initiatives Section */}
            <section className="satori-section bg-champagne-gold/10">
                <div className="satori-container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="satori-heading text-4xl mb-4 text-dark-brown">
                            Active Initiatives
                        </h2>
                        <div className="w-24 h-px bg-copper mx-auto"></div>
                    </motion.div>

                    <div className="space-y-20">
                        {philanthropyInitiatives.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-1 w-full relative h-[400px] rounded-sm overflow-hidden shadow-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="flex-1 text-center lg:text-left">
                                    <h3 className="satori-heading text-3xl mb-6 text-dark-brown">{item.title}</h3>
                                    <p className="satori-text text-lg leading-relaxed text-dark-brown/80 mb-8">
                                        {item.description}
                                    </p>
                                    <button className="satori-button-outline text-dark-brown border-dark-brown hover:bg-dark-brown hover:text-ivory">
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="satori-section bg-dark-brown text-ivory">
                <div className="satori-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="satori-heading text-4xl mb-6">Join Us in Making a Difference</h2>
                        <p className="satori-text text-xl max-w-2xl mx-auto mb-10 text-ivory/80">
                            Members of Satori Santé are invited to participate in our philanthropic journeys
                            and contribute to the causes that resonate with them.
                        </p>
                        <Link href="/contact">
                            <button className="satori-button-filled bg-champagne-gold text-dark-brown hover:bg-ivory">
                                Get Involved
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
