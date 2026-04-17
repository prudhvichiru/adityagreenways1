import React, { useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Scheme from './components/Scheme';
import Faq from './components/Faq';
import WhyChoose from './components/WhyChoose';
import ContactForm from './components/ContactForm';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';
import { BlogList } from './components/blogData';
import BlogDetails from './components/BlogDetails';
import { blogPosts } from './components/blogData';

const Home = () => (
  <>
    <Hero />
    <About />
    <div id="scheme">
      <Scheme />
    </div>
    <Services />
    <WhyChoose />
    <div id="faq">
      <Faq />
    </div>
    <div id="blog">
      <BlogList />
    </div>
    <QuoteForm />
    <ContactForm />
  </>
);



import { useEffect } from 'react';

// Route wrapper for BlogDetails (must be outside App component)
function BlogDetailsRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => String(p.id) === id);
  if (!post) return <div className="py-20 text-center text-2xl">Blog post not found.</div>;
  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('blog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return <BlogDetails post={post} onBack={handleBack} />;
}

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 7000); // 7 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetailsRoute />} />
      </Routes>
      <Footer />
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;