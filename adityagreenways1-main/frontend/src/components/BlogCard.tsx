import React from 'react';
import { BlogPost } from './blogData';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col hover:scale-[1.02] transform"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center space-x-2 mb-2">
          {/* <span className="text-xs text-gray-500">{post.author}</span> */}
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-[#46614b]">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
        <div className="flex gap-4 mb-4 justify-center">
          <a href="https://www.instagram.com/adityagreenways1/" target="_blank" rel="noopener noreferrer" title="Instagram"
            className="rounded-full border-2 border-pink-400 p-2 flex items-center justify-center hover:scale-110 transition-transform"
            style={{ borderColor: '#e1306c' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="#e1306c" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.facebook.com/share/1JHauDJSHb/" target="_blank" rel="noopener noreferrer" title="Facebook"
            className="rounded-full border-2 border-indigo-400 p-2 flex items-center justify-center hover:scale-110 transition-transform"
            style={{ borderColor: '#6366f1' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.youtube.com/@adityagreenways" target="_blank" rel="noopener noreferrer" title="YouTube"
            className="rounded-full border-2 border-red-400 p-2 flex items-center justify-center hover:scale-110 transition-transform"
            style={{ borderColor: '#ff0000' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="#ff0000" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10,8 16,12 10,16" fill="#ff0000"/></svg>
          </a>
        </div>
        <button
          className="mt-auto bg-[#46614b] text-white px-4 py-2 rounded-lg hover:bg-[#3d5340] transition-all duration-300 w-fit self-end"
          onClick={onClick}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
