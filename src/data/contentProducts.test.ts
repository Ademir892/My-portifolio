import { describe, expect, it } from "vitest";

import { contentProducts } from "./contentProducts";

describe("contentProducts", () => {
  it("deve possuir exatamente três produtos", () => {
    expect(contentProducts).toHaveLength(3);
  });

  it("deve possuir slugs únicos", () => {
    const slugs = contentProducts.map((product) => product.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("deve possuir todos os campos obrigatórios preenchidos", () => {
    contentProducts.forEach((product) => {
      expect(product.slug).toBeTruthy();
      expect(product.category).toBeTruthy();
      expect(product.title).toBeTruthy();
      expect(product.shortDescription).toBeTruthy();
      expect(product.subtitle).toBeTruthy();
      expect(product.introduction).toBeTruthy();
      expect(product.format).toBeTruthy();
      expect(product.status).toBeTruthy();

      expect(product.audience.length).toBeGreaterThan(0);
      expect(product.topics.length).toBeGreaterThan(0);
    });
  });

  it("deve possuir os três produtos esperados", () => {
    const slugs = contentProducts.map((product) => product.slug);

    expect(slugs).toContain("postura-no-dia-a-dia");
    expect(slugs).toContain("mobilidade-para-a-vida-real");
    expect(slugs).toContain("treino-funcional");
  });

  it("deve manter os produtos como e-books digitais", () => {
    contentProducts.forEach((product) => {
      expect(product.format).toBe("E-book digital");
    });
  });
});
