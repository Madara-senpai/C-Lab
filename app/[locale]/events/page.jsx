"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiClock, FiMapPin, FiArrowRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Section from "../../components/Section";

const events = [
  {
    id: 1,
    title: "AI Robotics Integration Workshop",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "CyberControl Lab, Main Hall",
    description: "Hands-on workshop exploring neural networks in industrial robotics. Participants will program AI-controlled robotic arms using TensorFlow and ROS.",
    category: "Workshop",
    link: "#",
    image: "/images/events/ai-robotics.jpg"
  },
  {
    id: 2,
    title: "Quantum Computing Seminar Series",
    date: "April 2, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Virtual Event",
    description: "Three-part seminar exploring quantum algorithms and their applications in cybersecurity and optimization problems.",
    category: "Seminar",
    link: "#",
    image: "/images/events/quantum-seminar.jpg"
  },
  {
    id: 3,
    title: "24hr Neuro-Hackathon",
    date: "April 20, 2024",
    time: "All Day",
    location: "CyberControl Innovation Hub",
    description: "Intensive coding competition focusing on brain-computer interface development using EEG and machine learning.",
    category: "Hackathon",
    link: "#",
    image: "/images/events/hackathon.jpg"
  },
  {
    id: 4,
    title: "Cybersecurity Deep Dive Workshop",
    date: "May 8, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Lab Security Pavilion",
    description: "Advanced workshop covering zero-trust architectures and AI-driven threat detection systems.",
    category: "Workshop",
    link: "#",
    image: "/images/events/cybersecurity.jpg"
  },
  {
    id: 5,
    title: "Future of AI Ethics Symposium",
    date: "June 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Global Conference Hall",
    description: "Panel discussion with industry leaders on ethical AI development and regulatory frameworks.",
    category: "Seminar",
    link: "#",
    image: "/images/events/ai-ethics.jpg"
  }
];

const categories = ["All", "Workshop", "Seminar", "Hackathon"];

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow transition-all"
  >
    <div className="relative h-60">
      <Image
        src="/images/event-placeholder.jpg"
        alt={event.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="absolute top-4 right-4 px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-semibold">
        {event.category}
      </span>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{event.title}</h3>
      
      <div className="space-y-3 text-gray-400">
        <div className="flex items-center gap-2">
          <FiCalendar className="text-neon-pink" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock className="text-neon-green" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="text-neon-cyan" />
          <span>{event.location}</span>
        </div>
      </div>

      <p className="mt-4 text-gray-300 line-clamp-3">{event.description}</p>

      <a
        href={event.link}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-neon-blue/20 text-neon-blue rounded-full hover:bg-neon-blue/30 transition-colors"
      >
        <span>rsp now</span>
        <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    
    <div className="absolute inset-0 border border-neon-blue/20 rounded-2xl pointer-events-none" />
  </motion.div>
);

const Events = () => {
  const t = useTranslations('event')

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Section id="events" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-900/95 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent mb-4">
            {t('htwo')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('paragraf')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 relative">
          {categories.map((category) => (
            <button
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-neon-blue text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              {category}
              {hoveredCategory === category && (
                <motion.div
                  layoutId="categoryHover"
                  className="absolute inset-0 border border-neon-blue/30 rounded-full"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events
              .filter(event => selectedCategory === "All" || event.category === selectedCategory)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {events.filter(event => selectedCategory === "All" || event.category === selectedCategory).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-500"
          >
            {t('notfound')}
          </motion.div>
        )}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent" />
      </div>
    </Section>
  );
};

export default Events;