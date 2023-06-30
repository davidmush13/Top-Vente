/// <reference types="Cypress" />
describe("template spec", () => {

  it("4025128", () => {
    cy.visit("https://www.rona.ca/fr");
  
    cy.get("#keywords").type("4025128");
    cy.get(".icon-search").first().click();
    cy.window().then((el) => {
      cy.get(".closeEnews").click();
    });
  
    cy.get(".price-box__price__amount__integer")
      .first()
      .then(($price) => {
        cy.wrap($price)
          .invoke("text")
          .then((text) => {
            cy.get('.page-product__title').first().then(($nom)=>{
              cy.wrap($nom)
                .invoke("text")
                .then((nom)=>{
                  let nomDuProduit = nom.trim();
                  let prix = text.trim();
                  let quantity = 1;
                  const targetTotal = 250;
                  const productPrice = parseFloat(prix.replace("$", ""));
                  let currentTotal = productPrice * quantity;
  
                  while (currentTotal < targetTotal) {
                    quantity++;
                    currentTotal += productPrice;
                  }
  
                  cy.get("#qte").clear().type(quantity.toString());
                  cy.writeFile(
                    "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                    `${nomDuProduit} Prix à l'unité: ${prix}$\n`,
                    { flag: "a+" }
                  );
                })
            });
          });
      });
  
    cy.get("#Add2Cart").should("have.class", "addButton").click();
  
    cy.wait(5000);
  
    cy.window().then((p) => {
      cy.get(".js-seecart-from-minicart").click();
    });
  
    cy.get(".cart-summary__charge-price")
      .last()
      .then(($prixAv) => {
        cy.wrap($prixAv)
          .invoke("text")
          .then((prixAv) => {
            const PrixAvant = prixAv.trim();
            cy.get(".checkout-summary__charge-price")
              .last()
              .then(($prixAp) => {
                cy.wrap($prixAp)
                  .invoke("text")
                  .then((prixAp) => {
                    const PrixApres = prixAp.trim();
                    cy.writeFile(
                      "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                      `Prix avant les taxes: ${PrixAvant}\nPrix après les taxes: ${PrixApres}\n\n`,
                      { flag: "a+" }
                    );
                  });
              });
          });
      });
  });

  it("58166840", () => {
    cy.visit("https://www.rona.ca/fr");
  
    cy.get("#keywords").type("58166840");
    cy.get(".icon-search").first().click();
    cy.window().then((el) => {
      cy.get(".closeEnews").click();
    });
  
    cy.get(".price-box__price__amount__integer")
      .first()
      .then(($price) => {
        cy.wrap($price)
          .invoke("text")
          .then((text) => {
            cy.get('.page-product__title').first().then(($nom)=>{
              cy.wrap($nom)
                .invoke("text")
                .then((nom)=>{
                  let nomDuProduit = nom.trim();
                  let prix = text.trim();
                  let quantity = 1;
                  const targetTotal = 250;
                  const productPrice = parseFloat(prix.replace("$", ""));
                  let currentTotal = productPrice * quantity;
  
                  while (currentTotal < targetTotal) {
                    quantity++;
                    currentTotal += productPrice;
                  }
  
                  cy.get("#qte").clear().type(quantity.toString());
                  cy.writeFile(
                    "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                    `${nomDuProduit} Prix à l'unité: ${prix}$\n`,
                    { flag: "a+" }
                  );
                })
            });
          });
      });
  
    cy.get("#Add2Cart").should("have.class", "addButton").click();
  
    cy.wait(5000);
  
    cy.window().then((p) => {
      cy.get(".js-seecart-from-minicart").click();
    });
  
    cy.get(".cart-summary__charge-price")
      .last()
      .then(($prixAv) => {
        cy.wrap($prixAv)
          .invoke("text")
          .then((prixAv) => {
            const PrixAvant = prixAv.trim();
            cy.get(".checkout-summary__charge-price")
              .last()
              .then(($prixAp) => {
                cy.wrap($prixAp)
                  .invoke("text")
                  .then((prixAp) => {
                    const PrixApres = prixAp.trim();
                    cy.writeFile(
                      "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                      `Prix avant les taxes: ${PrixAvant}\nPrix après les taxes: ${PrixApres}\n\n`,
                      { flag: "a+" }
                    );
                  });
              });
          });
      });
  });

  it("58166991", () => {
    cy.visit("https://www.rona.ca/fr");
  
    cy.get("#keywords").type("58166991");
    cy.get(".icon-search").first().click();
    cy.window().then((el) => {
      cy.get(".closeEnews").click();
    });
  
    cy.get(".price-box__price__amount__integer")
      .first()
      .then(($price) => {
        cy.wrap($price)
          .invoke("text")
          .then((text) => {
            cy.get('.page-product__title').first().then(($nom)=>{
              cy.wrap($nom)
                .invoke("text")
                .then((nom)=>{
                  let nomDuProduit = nom.trim();
                  let prix = text.trim();
                  let quantity = 1;
                  const targetTotal = 250;
                  const productPrice = parseFloat(prix.replace("$", ""));
                  let currentTotal = productPrice * quantity;
  
                  while (currentTotal < targetTotal) {
                    quantity++;
                    currentTotal += productPrice;
                  }
  
                  cy.get("#qte").clear().type(quantity.toString());
                  cy.writeFile(
                    "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                    `${nomDuProduit} Prix à l'unité: ${prix}$\n`,
                    { flag: "a+" }
                  );
                })
            });
          });
      });
  
    cy.get("#Add2Cart").should("have.class", "addButton").click();
  
    cy.wait(5000);
  
    cy.window().then((p) => {
      cy.get(".js-seecart-from-minicart").click();
    });
  
    cy.get(".cart-summary__charge-price")
      .last()
      .then(($prixAv) => {
        cy.wrap($prixAv)
          .invoke("text")
          .then((prixAv) => {
            const PrixAvant = prixAv.trim();
            cy.get(".checkout-summary__charge-price")
              .last()
              .then(($prixAp) => {
                cy.wrap($prixAp)
                  .invoke("text")
                  .then((prixAp) => {
                    const PrixApres = prixAp.trim();
                    cy.writeFile(
                      "C:/Users/dmushegyan/Desktop/Top vente Dav/Rona.txt",
                      `Prix avant les taxes: ${PrixAvant}\nPrix après les taxes: ${PrixApres}\n\n`,
                      { flag: "a+" }
                    );
                  });
              });
          });
      });
  });
  

});
