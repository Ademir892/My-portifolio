import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";

export default function MainLayout() {
  return (
    <div id="top">
      <ScrollToTop />

      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
