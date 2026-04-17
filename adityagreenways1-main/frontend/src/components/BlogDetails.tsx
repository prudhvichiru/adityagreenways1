import React from 'react';
import { BlogPost } from './blogData';


// Social media page links
const socialLinks = {
  facebook: 'https://www.facebook.com/share/1JHauDJSHb/',
  instagram: 'https://www.instagram.com/adityagreenways1/',
  youtube: 'https://www.youtube.com/@adityagreenways',
};

const BlogDetails: React.FC<{ post: BlogPost; onBack?: () => void }> = ({ post, onBack }) => {
  const url = window.location.href;
  return (
    <section className="pt-32 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-xl shadow mb-6 bg-white" />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-gray-600 font-medium">{post.author}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{post.date}</span>
        </div>
        <article className="prose prose-lg max-w-none mb-8 text-gray-800">
          {post.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
        <div className="flex items-center gap-4 mb-10">
          <span className="text-gray-600 font-medium">Follow us:</span>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Facebook</a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Instagram</a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">YouTube</a>
        </div>
        <button onClick={onBack} className="mt-8 mb-4 text-[#46614b] hover:underline text-lg">← Back to Blog</button>
      </div>
    </section>
  );
};

export default BlogDetails;
