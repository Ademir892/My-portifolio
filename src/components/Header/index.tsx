import { NavLink } from "react-router-dom";

import "./styles.css";

const navigationItems = [
  {
    label: "Projetos",
    path: "/projects",
  },
  {
    label: "Sobre",
    path: "/about",
  },
  {
    label: "Contato",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <NavLink
          to="/"
          className="site-header__brand"
          aria-label="Ir para a página inicial"
        >
          <span className="site-header__name">Ademir Traesel</span>

          <span className="site-header__role">Engenharia + Software + Educação Física</span>
        </NavLink>

        <nav
          className="site-header__navigation"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "site-header__link site-header__link--active"
                  : "site-header__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
