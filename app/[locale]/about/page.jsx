"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "../../components/Section";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "use-intl";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {

  const t = useTranslations('about');


  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Section crosses className="relative overflow-hidden">
      <motion.div 
        className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        style={{ scale }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_70%)]" />
        </div>

        {/* Page Title */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neonBlue to-neonGreen bg-clip-text text-transparent drop-shadow-glow"
          >
            {t('title')}
          </motion.h1>
        </motion.header>

        {/* Introduction */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="grid md:grid-cols-2 gap-12 mb-24"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-neonGreen mb-4">
              {t('htwo')}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {t('at')} <span className="text-neonBlue font-semibold">{t('span')}</span>, 
              {t('text')}
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {["AI Governance", "Neural Networks", "Quantum Control", "Edge Robotics"].map((tag) => (
                <li key={tag} className="px-4 py-2 bg-gray-900 rounded-full text-center text-neonBlue border border-neonBlue/30">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-neonBlue/50 shadow-glow">
              <Image
                src="/images/lab-overview.jpg"
                alt="CyberControl Lab Facility"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Research Highlights */}
        <motion.section 
          className="py-16"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          <h2 className="text-3xl font-bold text-neonBlue text-center mb-12">
            {t('htwo2')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Cyber-Physical Systems",
                description: "Developing self-healing networks of intelligent agents capable of real-time adaptation",
                icon: "🤖",
              },
              {
                title: "Secure Neural Architectures",
                description: "Building intrusion-resilient AI frameworks with quantum-resistant encryption",
                icon: "🔐",
              },
              {
                title: "Energy-Aware Automation",
                description: "Creating sustainable control systems with dynamic power optimization",
                icon: "⚡",
              },
            ].map((research, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-neonBlue/20 shadow-glow-hover"
              >
                <div className="text-4xl mb-4">{research.icon}</div>
                <h3 className="text-xl font-semibold text-neonGreen mb-3">
                  {research.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {research.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="py-16"
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          <h2 className="text-3xl font-bold text-neonBlue text-center mb-12">
            {t('leadership')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Alex Chen",
                role: "Director of Cybernetic Research",
                expertise: "Quantum Control Systems",
                img: "/images/team1.jpg",
                social: { linkedin: "#", twitter: "#" },
              },
              {
                name: "Dr. Maria Gonzalez",
                role: "Head of AI Security",
                expertise: "Adversarial Machine Learning",
                img: "/images/team2.jpg",
                social: { linkedin: "#", twitter: "#" },
              },
              {
                name: "Dr. Raj Patel",
                role: "Lead Robotics Engineer",
                expertise: "Swarm Intelligence",
                img: "/images/team3.jpg",
                social: { linkedin: "#", twitter: "#" },
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-gray-900 border border-neonBlue/30"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neonGreen">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                  <p className="text-neonBlue text-sm">{member.expertise}</p>
                  <div className="flex gap-3 mt-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <Link
                        key={platform}
                        href={url}
                        className="text-gray-400 hover:text-neonBlue transition-colors"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        {platform === 'linkedin' ? '👔' : '🐦'}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-16"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-neonBlue/20 to-neonGreen/20 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-neonGreen mb-4">
              {t('h2text')}
            </h2>
            <p className="text-gray-300 mb-8">
              {t('paragraf2')}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-neonBlue rounded-full font-semibold hover:bg-neonBlue/80 transition-colors"
              >
                {t('partner')}
              </Link>
              <Link
                href="/careers"
                className="px-8 py-3 border border-neonGreen text-neonGreen rounded-full hover:bg-neonGreen/10 transition-colors"
              >
                {t('join')}
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </Section>
  );
}