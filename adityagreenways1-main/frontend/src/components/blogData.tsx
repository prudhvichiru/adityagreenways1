import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  // author: string; (removed)
  date: string;
  image: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Benefits of Solar Energy',
    description: 'Discover how solar energy can save you money and help the environment. Learn about the advantages of switching to solar power for your home or business.',
    content: `Solar energy is a clean, renewable resource that can reduce your electricity bills and carbon footprint. Learn more about how solar panels work and why they are a smart investment.\n\nSolar panels convert sunlight into electricity, providing a sustainable energy source. They require minimal maintenance and can last for decades, making them a cost-effective solution for energy needs.`,
    // author: 'Aditya Sharma',
    date: '2026-04-10',
    image: '/img/solar-benefits.jpg',
    tags: ['Solar', 'Benefits', 'Environment'],
  },
  {
    id: 2,
    title: 'How to Choose the Right Solar Panel',
    description: 'A guide to selecting the best solar panel for your home or business. Understand the key factors before making a decision.',
    content: `Choosing the right solar panel depends on your energy needs, roof space, and budget. We break down the key factors to consider when making your decision.\n\nLook for efficiency, warranty, and manufacturer reputation. Consult with a professional to ensure optimal installation and performance.`,
    // author: 'Priya Verma',
    date: '2026-03-28',
    image: '/img/h4.webp',
    tags: ['Solar'],
  },
  {
    id: 3,
    title: 'Solar Panel Maintenance Tips',
    description: 'Keep your solar panels running efficiently with these simple maintenance tips. Ensure long-term performance and savings.',
    content: `Regular cleaning and inspections can help maintain the efficiency of your solar panels. Remove debris, check for shading, and monitor system performance.\n\nSchedule professional maintenance annually to address any issues and maximize your investment.`,
    // author: 'Rohit Singh',
    date: '2026-03-15',
    image: '/img/solar-maintence.png',
    tags: ['Solar'],
  },
];

export const BlogList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const navigate = useNavigate();

  const categories = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || post.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <section className="py-12 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#46614b] inline-block">Blog</h2>
          <div className="h-1 w-24 bg-orange-400 mx-auto mt-2 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46614b] transition"
          />
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <button
              className={`px-3 py-1 rounded-full text-sm ${!selectedCategory ? 'bg-[#46614b] text-white' : 'bg-gray-200 text-gray-700'} transition`}
              onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-3 py-1 rounded-full text-sm ${selectedCategory === cat ? 'bg-[#46614b] text-white' : 'bg-gray-200 text-gray-700'} transition`}
                onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map(post => (
            <BlogCard key={post.id} post={post} onClick={() => navigate(`/blog/${post.id}`)} />
          ))}
        </div>
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${currentPage === i + 1 ? 'bg-[#46614b] text-white' : 'bg-gray-200 text-gray-700'} transition`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
