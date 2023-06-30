import { Workbook } from "exceljs";

describe("Test d'écriture dans un fichier Excel", () => {
  it("12.3 Doit récupérer les Ipad Rakuten", () => {
    cy.visit("/sites/rakuten_ipad.html");

    const desc = `\n12.3 - Rakuten - Ipad \n`;
    cy.writeFile(
      "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
      desc,
      { flag: "a+" }
    );

    cy.get(".productList_layoutContent_Q06:lt(28)").each(($link, index, $links) => {
      cy.wrap($link)
        .find("a")
        .then(($a) => {
          const link = $a.attr("href");
          const linkText = $a.text().trim();

          // Vérifier si le lien ne contient pas "offer " après "https://fr.shopping.rakuten.com/"
          if (link && !link.includes("offer/shop", "https://fr.shopping.rakuten.com/")) {
            const result = `=LIEN_HYPERTEXTE("https://fr.shopping.rakuten.com${link}";"${linkText.replace(/"/g,"'")}")\n`;
            cy.writeFile(
              "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
              result,
              { flag: "a+" }
            );
          }
        });
    });
  });
});
