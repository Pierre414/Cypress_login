import { Qwiki } from "../../tester/Qwiki";

context("qwiki", () => {
//   it("can login", () => {
//     const qwiki = new Qwiki("https://dev.testing.modac.eu/");
//     const overview = qwiki.login("admin", "modell-aachen");
//     overview.isVisible();
//   });

  // it("can create a page", () => {
  //   cy.visit("https://dev.testing.modac.eu/");
  //   cy.get("input.foswikiFocus").type("admin");
  //   cy.get("input[name*='password']").type("modell-aachen");
  //   cy.get("input.button.primary").click();
  //   cy.get("[data-test='pageCreate'").click();
  //   cy.get("div.ma-input:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type("Test123");
  //   cy.get("[data-test='create-page'").click();
  //   cy.get('span.select2-selection__rendered').click({timeout: 12000});
  //   cy.get('span.select2-container--open').find('input.select2-search__field').type('Frederic Klein');
  //   cy.get('div.topicselect_label').contains('Frederic Klein (MA)').click({timeout:12000});
  //   cy.get('#save').click();
  //   cy.get("div.document-header__content").should("exist");
  // cy.get('div.modacHeaderTable > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > strong:nth-child(1)').should('have.value','Frederic Klein (MA)')
  // });

  it("can create a page",()=>{
    const qwiki = new Qwiki("https://dev.testing.modac.eu/");
    const overview= qwiki.login({username:"admin",password:"modell-aachen"});
    const page=overview.createPage({title:"Test123",inputResponsible:"Frederic K"});
    page.isADraft({type:'Arbeitsanweisung',responsible:'Frederic Klein (MA)',status:'Entwurf'});
  });
});
