import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Content from "./index";

describe("Content", () => {
  it("deve exibir os três conteúdos disponíveis no catálogo", () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Postura no dia a dia" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Mobilidade para a vida real",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Treino Funcional: comece pelo movimento",
      }),
    ).toBeInTheDocument();
  });

  it("deve exibir os três conteúdos como links navegáveis", () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: /Postura no dia a dia/i }),
    ).toHaveAttribute("href", "/conteudos/postura-no-dia-a-dia");

    expect(
      screen.getByRole("link", { name: /Mobilidade para a vida real/i }),
    ).toHaveAttribute("href", "/conteudos/mobilidade-para-a-vida-real");

    expect(
      screen.getByRole("link", {
        name: /Treino Funcional: comece pelo movimento/i,
      }),
    ).toHaveAttribute("href", "/conteudos/treino-funcional");
  });

  it("deve exibir os conteúdos como disponíveis em breve", () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>,
    );

    const statuses = screen.getAllByText("Em breve");

    expect(statuses).toHaveLength(3);
  });
});
