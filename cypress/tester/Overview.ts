import { now } from "cypress/types/lodash";
import { Page } from "./Page";
import {Risk} from "./Risk";


interface PageCreate {
  title: string;
  responsible: string;
}

interface RiskCreate{
  title:string;
}
export class Overview {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public isVisible() {
    cy.get("#map").should("exist");
  }
  public createPage(pageCreate: PageCreate) {
    cy.get("[data-test='pageCreate'").click();
    cy.get("[data-test='titleInput'").type(pageCreate.title);
    cy.get("[data-test='create-page'").should("exist");
    cy.get("[data-test='create-page'").click();
    cy.get("span.select2-selection__rendered").should("exist");
    cy.get("span.select2-selection__rendered").click();
    cy.get("span.select2-container--open").find("input.select2-search__field").type(pageCreate.responsible);
    cy.get("div.topicselect_label").should("exist");
    cy.contains("div.topicselect_label", pageCreate.responsible).click();
    cy.get("#save").click();
    return new Page();
  }
  
  public createRisk(riskCreate:RiskCreate){
    cy.get('#modacSidebarTWO3show').click();
    cy.get('div.modacSidebarTwisty').contains('Risiken').click();
    cy.get("div.modacSidebarActions").contains('Neues Risiko anlegen').click();
    cy.get('input.foswikiInputField.foswikiMandatory').should('exist');
    cy.get('input.foswikiInputField.foswikiMandatory').type(riskCreate.title);
    cy.get('#save').click();
    return new Risk(riskCreate.title);
  }
}
