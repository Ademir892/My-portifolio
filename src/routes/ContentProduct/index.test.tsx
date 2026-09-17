import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import ContentProduct from "./index";

describe("ContentProduct", () => {
  it.each([
    {
      slug: "postura-no-dia-a-dia",
      heading: "Postura no dia a dia.",
    },
    {
      slug: "mobilidade-para-a-vida-real",
      heading: "Mobilidade para a vida real.",
    },
    {
      slug: "treino-funcional",
      heading: "Treino Funcional.",
    },
  ])(
    "deve renderizar o conteúdo correto para o slug $slug",
    ({ slug, heading }) => {
      render(
        <MemoryRouter initialEntries={[`/conteudos/${slug}`]}>
          <Routes>
            <Route path="/conteudos/:slug" element={<ContentProduct />} />
          </Routes>
        </MemoryRouter>,
      );

      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    },
  );

  it("deve redirecionar quando o slug não existir", () => {
    render(
      <MemoryRouter initialEntries={["/conteudos/conteudo-inexistente"]}>
        <Routes>
          <Route path="/conteudos/:slug" element={<ContentProduct />} />
          <Route path="/conteudos" element={<div>Catálogo de conteúdos</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Catálogo de conteúdos")).toBeInTheDocument();
  });
});
