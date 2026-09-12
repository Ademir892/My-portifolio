import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import About from "./routes/About";
import { Contact } from "./routes/Contact";
import Projects from "./routes/Projects";
import { TermsAnsPrivacy } from "./routes/Terms";
import Consulting from "./routes/Consulting";
import Training from "./routes/Training";
import Systems from "./routes/Systems";
import Content from "./routes/Content";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/termos" element={<TermsAnsPrivacy />} />

          <Route path="/consultoria" element={<Consulting />} />
          <Route path="/consultoria/treinamento" element={<Training />} />
          <Route path="/consultoria/sistemas" element={<Systems />} />
          <Route path="/conteudos" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
