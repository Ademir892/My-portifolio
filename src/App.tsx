
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import { Contact } from './routes/Contact';
import Projects from './routes/Projects';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
}

