import React from 'react';
import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import StyleGuide from './pages/StyleGuide'; 
import NotFound from './pages/NotFound';

function App() {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth="lg" component="main" sx={{ flex: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
