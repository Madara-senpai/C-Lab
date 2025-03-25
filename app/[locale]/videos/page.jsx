"use client";
import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Image from "next/image";
import Arrow from "../../components/svg/Arrow";
import { GradientLight } from "../../components/design/Benefits";
import ClipPath from "../../components/svg/ClipPath";
import Link from "next/link";
import { useTranslations } from "next-intl";


const categories = ["all", "tutorials", "entertainment", "reviews", "tech talks"];

const Videos = () => {

  const t = useTranslations('videos');
  const videos = t.raw('videocontent');



  const [filter, setFilter] = useState("all");
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const videoRefs = useRef({});
  const [playingVideo, setPlayingVideo] = useState(null);

  const filteredVideos = useMemo(() => 
    videos.filter(item => filter === "all" || item.category === filter),
    [filter]
  );

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.9 }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const handlePlay = (id) => {
    if (playingVideo && playingVideo !== id) {
      videoRefs.current[playingVideo].pause();
    }
    setPlayingVideo(id);
    videoRefs.current[id].play().catch(error => {
      console.error("Video play failed:", error);
    });
  };

  return (
    <Section id="videos" className="overflow-hidden">
      <motion.div style={{ scale }} className="container relative z-2 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:w-1/4 w-full lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)]"
          >
            <Heading className="mb-8" title={t('title')} />

            <div className="flex lg:flex-col gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all 
                    ${filter === category 
                      ? "bg-neon-green text-black shadow-glow-lg" 
                      : "bg-gray-800/50 text-neon-blue hover:bg-neon-pink/20 backdrop-blur-sm"}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.aside>

          {/* Video Grid */}
          <div className="lg:w-3/4 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredVideos.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeIn}
                    className="group relative bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm"
                  >
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        controls
                        className="w-full h-full object-cover rounded-t-2xl"
                        poster={item.thumbnailUrl}
                        preload="metadata"
                        onPlay={() => handlePlay(item.id)}
                        onPause={() => setPlayingVideo(null)}
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        {t('videoerror')}
                      </video>
                      
                      {playingVideo !== item.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                          <button 
                            onClick={() => handlePlay(item.id)}
                            className="p-4 rounded-full bg-neon-pink/80 hover:bg-neon-pink transition-colors"
                          >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-xl font-bold text-neon-cyan mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{item.text}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Image
                            src={item.iconUrl}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-neon-pink object-cover"
                          />
                          <span className="text-sm text-neon-green bg-gray-900 px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <Link
                          href={item.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-neon-blue hover:text-neon-pink transition-colors"
                        >
                          <span className="font-code text-sm">{t('fullsc')}</span>
                          <Arrow className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {item.light && <GradientLight />}
                    <ClipPath />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Videos;