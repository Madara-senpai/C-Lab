'use client'
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation instead of next/router

// Sample blog data, this should ideally come from a database or API.
const posts = [
  {
    slug: "ai-robotics-workshop",
    title: "AI Robotics Workshop",
    content: "Explore the world of AI and Robotics with hands-on workshops.",
    category: "Technology",
    date: "2025-02-01",
    imageUrl: "/images/ai-robotics.jpg",
  },
  {
    slug: "future-of-iot",
    title: "Future of IoT",
    content: "Discover the future of IoT and its impact on industries.",
    category: "Innovation",
    date: "2025-02-15",
    imageUrl: "/images/iot.jpg",
  },
  {
    slug: "robotics-in-education",
    title: "Robotics in Education",
    content: "Learn how robotics is revolutionizing education.",
    category: "Education",
    date: "2025-02-18",
    imageUrl: "/images/robotics-education.jpg",
  },
  // Add more posts...
];

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;  // Retrieve the slug from the query parameters

  // Find the post that matches the slug from the URL
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
        <span className="ml-4 text-sm text-gray-500">{post.category}</span>
      </div>
      <div className="mb-6">
        <img src={post.imageUrl} alt={post.title} className="w-full h-72 object-cover rounded-lg" />
      </div>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
