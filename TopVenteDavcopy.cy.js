describe("template spec", () => {
  // it("1.1 Doit récuperer les Telephones Amazon", () => {
  //   cy.visit("https://www.amazon.fr/gp/bestsellers/electronics/218193031/ref=s9_acss_bw_h1_Phonetit_md1?pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-1&pf_rd_r=1DT7PS8QY1DXJ0NH52FW&pf_rd_t=101&pf_rd_p=641664387&pf_rd_i=13910711");

  //   const desc = `1.1 - Amazon - Mobiles \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",desc,{ flag: "a+" }
  //   );
  //   cy.get("div#gridItemRoot > div > div.zg-grid-general-faceout > .p13n-sc-uncoverable-faceout > a.a-link-normal:nth-of-type(2):lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               // $link = ("https://www.amazon.fr/"+$link)
  //               const result = `=LIEN_HYPERTEXTE("https://www.amazon.fr${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("1.2 Doit récuperer les Tablettes Amazon", () => {
  //   cy.visit("https://www.amazon.fr/gp/bestsellers/computers/429882031/ref=amb_link_180272647_2?pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7&pf_rd_r=1CVBFAYC16Y8HZ6GEKGJ&pf_rd_t=101&pf_rd_p=591325447&pf_rd_i=514846031#1");

  //   const desc = `\n1.2 - Amazon - Tablettes \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get("div#gridItemRoot > div > div.zg-grid-general-faceout > .p13n-sc-uncoverable-faceout > a.a-link-normal:nth-of-type(2):lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               // $link = ("https://www.amazon.fr/"+$link)
  //               const result = `=LIEN_HYPERTEXTE("https://www.amazon.fr${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("3.1 Doit récuperer les Telephones Android CDiscount", () => {
  //   cy.visit("https://www.cdiscount.com/telephonie/telephone-mobile/smartphones/avec-android/l-144040203.html#_his_");
  //   cy.wait(20000);
  //   // cy.get('[data-value="BESTSALES"]').click();

  //   const desc = `\n3.1 - CDiscount - Mobiles - Android \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".prdtBILDetails > a:lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("3.2 Doit récuperer les IPhones IOS CDiscount", () => {
  //   cy.visit("https://www.cdiscount.com/search/10/iphone.html?TechnicalForm.SiteMapNodeId=0&TechnicalForm.DepartmentId=10&TechnicalForm.ProductId=&hdnPageType=Search&TechnicalForm.ContentTypeId=16&TechnicalForm.SellerId=&TechnicalForm.PageType=SEARCH_AJAX&TechnicalForm.LazyLoading.ProductSheets=False&TechnicalForm.BrandLicenseId=0&NavigationForm.CurrentSelectedNavigationPath=categorycodepath%2F07%7C0703%7C070302&NavigationForm.FirstNavigationLinkCount=3&FacetForm.SelectedFacets.Index=0&FacetForm.SelectedFacets.Index=1&FacetForm.SelectedFacets.Index=2&FacetForm.SelectedFacets.Index=3&FacetForm.SelectedFacets.Index=4&FacetForm.SelectedFacets.Index=5&FacetForm.SelectedFacets.Index=6&FacetForm.SelectedFacets.Index=7&FacetForm.SelectedFacets.Index=8&FacetForm.SelectedFacets.Index=9&FacetForm.SelectedFacets.Index=10&FacetForm.SelectedFacets.Index=11&FacetForm.SelectedFacets.Index=12&FacetForm.SelectedFacets.Index=13&FacetForm.SelectedFacets.Index=14&FacetForm.SelectedFacets.Index=15&FacetForm.SelectedFacets.Index=16&SortForm.SelectedSort=BESTSALES&ProductListTechnicalForm.Keyword=iphone&ProductListTechnicalForm.TemplateName=InLine&&_his_");

  //   const desc = `\n3.2 - CDiscount - IPhone - IOS \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".prdtBILDetails > a:lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("3.3 Doit récuperer les Tablettes Android CDiscount", () => {
  //   cy.visit("https://www.cdiscount.com/informatique/tablettes-tactiles-ebooks/tablettes-android/l-1079880.html#_his_");
  //   cy.get('[data-value="BESTSALES"]').click();

  //   const desc = `\n3.3 - CDiscount - Tablettes - Android \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".prdtBILDetails > a:lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("3.4 Doit récuperer les IPad IOS CDiscount", () => {
  //   cy.visit("https://www.cdiscount.com/informatique/tablettes-tactiles-ebooks/apple-ipad/ipad-2020/l-107981128.html#_his_");
  //   cy.get('[data-value="BESTSALES"]').click();

  //   const desc = `\n3.4 - CDiscount - IPad - IOS \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".prdtBILDetails > a:lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("4.1 Doit récuperer les Telephones SFR", () => {
  //   cy.visit("https://www.sfr.fr/offre-mobile/telephone-portable");

  //   const desc = `\n4.1 - SFR - Telephones \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".bl_title > a:lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("https://www.sfr.fr${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("5.1 Doit récuperer les Telephones Fnac", () => {
  //   cy.visit("/sites/fnac_mobiles.html");

  //   const desc = `\n5.1 - Fnac - Mobiles \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".Article-itemInfo > .Article-infoContent > .Article-desc > a").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("5.2 Doit récuperer les tablettes Fnac", () => {
  //   cy.visit("/sites/fnac_tablettes.html");

  //   const desc = `\n 5.2 - Fnac - Tablettes \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".Article-itemInfo > .Article-infoContent > .Article-desc > a").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim(); // ajout de la méthode trim()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("6.1 Doit récupérer les smartphones Orange", () => {
  //   cy.visit("https://boutique.orange.fr/mobile/mobiles-et-smartphones");

  //   const desc = `\n 6.1 - Orange - Smartphones \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".tile:lt(20)").each(($link, index, $links) => {
  //     cy.wrap($link)
  //       .invoke("attr", "href")
  //       .then((href) => {
  //         const link = href.trim(); // Ajout de la méthode trim()
  //         cy.wrap($link)
  //           .find(".device-name")
  //           .invoke("text")
  //           .then((text) => {
  //             const linkText = text.trim(); // Ajout de la méthode trim()
  //             const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //             cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //               result,
  //               { flag: "a+" }
  //             );
  //           });
  //       });
  //   });
  // });

  // it("6.2 Doit récupérer les Tablettes Orange", () => {
  //   cy.visit("https://boutique.orange.fr/tablette-et-cle/choisir-un-equipement?segment=tablettes&page=1");

  //   const desc = `\n 6.2 - Orange - Tablettes \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".tile:lt(20)").each(($link, index, $links) => {
  //     cy.wrap($link)
  //       .invoke("attr", "href")
  //       .then((href) => {
  //         const link = href.trim(); // Ajout de la méthode trim()
  //         cy.wrap($link)
  //           .find(".device-name")
  //           .invoke("text")
  //           .then((text) => {
  //             const linkText = text.trim(); // Ajout de la méthode trim()
  //             const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //             cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //               result,
  //               { flag: "a+" }
  //             );
  //           });
  //       });
  //   });
  // });

  // it("7.1 Doit récuperer les Mobiles Free",  () => {
  //   cy.visit("https://mobile.free.fr/shop?from=subscribe&orderBy=price_desc");

  //   cy.get('#didomi-notice-agree-button').click({force:true});
  //   const desc = `\n 7.1 - FREE - Mobiles \n`;
  //   cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",desc,{ flag: "a+" });
  //     cy.get("h3:lt(20)")
  //     .each(($link, index, $links) => {
  //       cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim().replace(/Samsung|Apple|Oppo|Xiaomi|Honor|Crosscall|Vivo|Realme|Nokia|Alcatel|PRS/g, function(match) {
  //                 return match.toLowerCase() + "/";
  //               });
  //               const lienLinkText = ("https://mobile.free.fr/shop/products/"+linkText)
  //               const result = `=LIEN_HYPERTEXTE("${lienLinkText.replace(/ /g,"-")}";"${linkText.replace(/ /g,"-")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //     });
  // });

  it("8.1 Doit récuperer les Mobiles Bouygues ", () => {
    cy.visit("https://www.bouyguestelecom.fr/telephones-mobiles#/");

    cy.wait(2000);
    const desc = `\n 8.1 - Bouygues - Mobiles \n`;
    cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",desc,{ flag: "a+" });
    // cy.get(".main_products_list > product-list-cont-parent > product_detail > .product_wrapper > .product_main_container > .main_top_container > .infos_container > a")
      cy.get("p.device-title:lt(20)")
      .each(($link, index, $links) => {
        cy.wrap($link)
              .invoke("text")
              .then((text) => {
                const linkText = text.trim().replace(/\+/g, "-plus");
                const lienLinkText = ("https://www.bouyguestelecom.fr/telephones-mobiles/"+linkText)
                const result = `=LIEN_HYPERTEXTE("${lienLinkText.replace(/ /g,"-").toLowerCase()}";"${linkText.replace(/ /g,"-")}")\n`;
                cy.writeFile(
                  "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
                  result,
                  { flag: "a+" }
                );
              });
      });
  });

  // it("9.1 Doit récupérer les Smartphones Red By SFR", () => {
  //   cy.visit("https://www.red-by-sfr.fr/telephones/#redclicid=C_HP_Telephones");

  //   const desc = `\n 9.1 - RedBySFR - Mobiles \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".product >.deviceColors:lt(20)").each(($deviceColor) =>{
  //     cy.wrap($deviceColor)
  //     .siblings().eq(2).find(".deviceImage > a:lt(20)").each(($link, index, $links) => {
  //       cy.wrap($link)
  //       .invoke("attr", "href")
  //       .then((href) => {
  //         const link = href.trim(); // Ajout de la méthode trim()
  //         cy.wrap($link)
  //         .invoke("text")
  //         .then((text) => {
  //           const linkText = text.trim(); // Ajout de la méthode trim()
  //           const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //           cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //           result,
  //           { flag: "a+" }
  //           );
  //         });
  //       });
  //     });
  //   })
  // });

  // it("10.1 Doit récuperer les Smartphones boulanger", () => {
  //   cy.visit(
  //     "https://www.boulanger.com/c/smartphone-telephone-portable?sorting_meilleure_vente=desc"
  //   );

  //   const desc = `\n 10.1 - Boulanger - Smartphones \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );
  //   cy.get(".product-list__product-area-2 > a:nth-child(1):lt(20)").each(
  //     ($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("html")  // Récupère le contenu HTML de l'élément
  //             .then((html) => {
  //               const $clone = Cypress.$("<div>").html(html); // Crée un nouvel élément jQuery à partir du contenu HTML
  //               $clone.find("strong").remove(); // Supprime les éléments <strong> du nouvel élément
  //               const linkText = $clone.text().trim().replace(/\s+/g, " ");
  //               const result = `=LIEN_HYPERTEXTE("www.boulanger.com${link}";"${linkText}")\n`;
  //               cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     }
  //   );
  // });

  // it("11.1 Doit récuperer les Mobiles Darty", () => {
  //   cy.visit("/sites/darty_mobiles.html");

  //   const desc = `\n 11.1 - Darty - Mobiles \n`;
  //   cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",desc,{ flag: "a+" });
  //   cy.get(".product_wrapper > .product_main_container > .main_top_container > .infos_container > .prd-family > a:lt(20)")
  //   .each(($link, index, $links) => {
  //   cy.wrap($link)
  //     .invoke("attr", "href")
  //     .then((href) => {
  //       const link = href.trim(); // ajout de la méthode trim()
  //       cy.wrap($link)
  //         .invoke("text")
  //         .then((text) => {
  //           const linkText = text.trim().replace(/\r?\n|\r/g, ""); // ajout de la méthode replace()
  //           const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/Smartphone/g,"")}")\n`;
  //           cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",result,{ flag: "a+" });
  //         });
  //     });
  // });


  // });

  // it("11.2 Doit récuperer les Tablettes Darty", () => {
  //   cy.visit("/sites/darty_tablettes.html");

  //   const desc = `\n 11.2 - Darty - Tablettes \n`;
  //   cy.writeFile("C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",desc,{ flag: "a+" });
  //   // cy.get(".main_products_list > product-list-cont-parent > product_detail > .product_wrapper > .product_main_container > .main_top_container > .infos_container > a")
  //     cy.get(".product_wrapper > .product_main_container > .main_top_container > .infos_container > .prd-family > a:lt(20)")
  //     .each(($link, index, $links) => {
  //       cy.wrap($link)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           const link = href.trim(); // ajout de la méthode trim()
  //           cy.wrap($link)
  //             .invoke("text")
  //             .then((text) => {
  //               const linkText = text.trim().replace(/\r?\n|\r/g, ""); // ajout de la méthode replace()
  //               const result = `=LIEN_HYPERTEXTE("${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //               cy.writeFile(
  //                 "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //                 result,
  //                 { flag: "a+" }
  //               );
  //             });
  //         });
  //     });
  // });

  // it("12.1 Doit récupérer les Téléphones Rakuten", () => {
  //   cy.visit("/sites/rakuten_mobiles.html");

  //   const desc = `\n12.1 - Rakuten - Mobiles \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );

  //   cy.get(".productList_layoutContent_Q06:lt(27)").each(($link, index, $links) => {
  //     cy.wrap($link)
  //       .find("a")
  //       .then(($a) => {
  //         const link = $a.attr("href");
  //         const linkText = $a.text().trim();

  //         // Vérifier si le lien ne contient pas "offer " après "https://fr.shopping.rakuten.com/"
  //         if (link && !link.includes("offer/shop", "https://fr.shopping.rakuten.com/")) {
  //           const result = `=LIEN_HYPERTEXTE("https://fr.shopping.rakuten.com${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //           cy.writeFile(
  //             "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //             result,
  //             { flag: "a+" }
  //           );
  //         }
  //       });
  //   });
  // });

  // it("12.2 Doit récupérer les Tablettes Rakuten", () => {
  //   cy.visit("/sites/rakuten_tablettes.html");

  //   const desc = `\n12.2 - Rakuten - Tablettes \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );

  //   cy.get(".productList_layoutContent_Q06:lt(27)").each(($link, index, $links) => {
  //     cy.wrap($link)
  //       .find("a")
  //       .then(($a) => {
  //         const link = $a.attr("href");
  //         const linkText = $a.text().trim();

  //         // Vérifier si le lien ne contient pas "offer " après "https://fr.shopping.rakuten.com/"
  //         if (link && !link.includes("offer/shop", "https://fr.shopping.rakuten.com/")) {
  //           const result = `=LIEN_HYPERTEXTE("https://fr.shopping.rakuten.com${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //           cy.writeFile(
  //             "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //             result,
  //             { flag: "a+" }
  //           );
  //         }
  //       });
  //   });
  // });

  // it("12.3 Doit récupérer les Ipad Rakuten", () => {
  //   cy.visit("/sites/rakuten_ipad.html");

  //   const desc = `\n12.3 - Rakuten - Ipad \n`;
  //   cy.writeFile(
  //     "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //     desc,
  //     { flag: "a+" }
  //   );

  //   cy.get(".productList_layoutContent_Q06:lt(28)").each(($link, index, $links) => {
  //     cy.wrap($link)
  //       .find("a")
  //       .then(($a) => {
  //         const link = $a.attr("href");
  //         const linkText = $a.text().trim();

  //         // Vérifier si le lien ne contient pas "offer " après "https://fr.shopping.rakuten.com/"
  //         if (link && !link.includes("offer/shop", "https://fr.shopping.rakuten.com/")) {
  //           const result = `=LIEN_HYPERTEXTE("https://fr.shopping.rakuten.com${link}";"${linkText.replace(/"/g,"'")}")\n`;
  //           cy.writeFile(
  //             "C:/Users/dmushegyan/Desktop/Top vente Dav/TopVente.txt",
  //             result,
  //             { flag: "a+" }
  //           );
  //         }
  //       });
  //   });
  // });

});
