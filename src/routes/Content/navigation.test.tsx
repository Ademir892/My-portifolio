import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Content from "./index";
import ContentProduct from "../ContentProduct";

describe("Navegação entre conteúdos", () => {
  it.each([
    {
      title: "Postura no dia a dia",
      destination: "Postura no dia a dia.",
    },
    {
      title: "Mobilidade para a vida real",
      destination: "Mobilidade para a vida real.",
    },
    {
      title: "Treino Funcional: comece pelo movimento",
      destination: "Treino Funcional.",
    },
  ])("deve navegar do catálogo para $title", async ({ title, destination }) => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/conteudos"]}>
        <Routes>
          <Route path="/conteudos" element={<Content />} />
          <Route path="/conteudos/:slug" element={<ContentProduct />} />
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: new RegExp(title, "i") });

    await user.click(link);

    expect(
      screen.getByRole("heading", { name: destination }),
    ).toBeInTheDocument();

    expect(link).not.toBeInTheDocument();
  });
});
