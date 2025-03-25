"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BlogPage = () => {
  const t = useTranslations("blog");
  const posts = t.raw("posts");

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const categories = ["All", "Technology", "Innovation", "Education"];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterPosts(term, selectedCategory, sortOption);
  };

  const filterPosts = (
    term = searchTerm,
    category = selectedCategory,
    sort = sortOption
  ) => {
    let filtered = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.description.toLowerCase().includes(term.toLowerCase());
      const matchesCategory = category === "All" || post.category === category;
      return matchesSearch && matchesCategory;
    });

    sortPosts(filtered, sort);
  };

  const sortPosts = (postsToSort, option) => {
    const sorted = [...postsToSort].sort((a, b) => {
      if (option === "date") return new Date(b.date) - new Date(a.date);
      if (option === "title") return a.title.localeCompare(b.title);
      return a.category.localeCompare(b.category);
    });
    setFilteredPosts(sorted);
  };

  return (
    <Section id="blog">
      <motion.div style={{ scale }} className="relative z-2 py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading
            className="mb-16 text-center"
            title={
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                {t("title")}
              </motion.span>
            }
          />

          {/* Controls */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid md:flex gap-4 mb-12"
          >
            <motion.div variants={fadeIn} className="flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={t("search")}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-neonBlue focus:ring-2 focus:ring-neonBlue/50 text-white transition-all"
              />
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <select
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  filterPosts(searchTerm, e.target.value, sortOption);
                }}
                value={selectedCategory}
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white appearance-none focus:ring-2 focus:ring-neonBlue/50"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-gray-800"
                  >
                    {category}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => {
                  setSortOption(e.target.value);
                  filterPosts(searchTerm, selectedCategory, e.target.value);
                }}
                value={sortOption}
                className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-neonBlue/50"
              >
                <option value="date">{t("sdate")}</option>
                <option value="title">{t("stitle")}</option>
                <option value="category">{t("scategory")}</option>
              </select>
            </motion.div>
          </motion.div>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-400"
              >
                {t("no_posts")}
              </motion.div>
            ) : (
              <motion.div
                key={filteredPosts.length}
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -5 }}
                      className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 bg-neonBlue/20 text-neonBlue rounded-full text-sm">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-400">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-100 mb-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-400 mb-4">{post.description}</p>

                        <div className="flex justify-between items-center text-sm">
                          <time className="text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </time>
                          <button className="px-4 py-2 bg-neonBlue/20 text-neonBlue rounded-full hover:bg-neonBlue/30 transition-colors">
                            {t("readmore")}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  );
};

export default BlogPage;
