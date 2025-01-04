import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Awards from './pages/Awards';
import Datasets from './pages/Datasets';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/media" element={<Media />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/datasets" element={<Datasets />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;