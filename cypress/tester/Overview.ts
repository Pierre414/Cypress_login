import { now } from 'cypress/types/lodash';
import {Page} from './Page'

interface PageCreate{
  title:string,
  inputResponsible:string
}
export class Overview {
  private readonly Url: string;

  constructor(Url: string) {
    this.Url = Url;
  }

  public MapIsVisible() {
    cy.get("#map").should("exist");
  }
  public createPage(pageCreate:PageCreate){
    cy.get("[data-test='pageCreate'").click();
    cy.get("div.ma-input:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type(pageCreate.title);
    cy.get("[data-test='create-page'").click({timeout: 12000});
    cy.get('span.select2-selection__rendered').click({timeout: 12000});
    cy.get('span.select2-container--open').find('input.select2-search__field').type(pageCreate.inputResponsible);
    cy.get('div.topicselect_label').contains(pageCreate.inputResponsible).click({timeout:12000});
    cy.get('#save').click();
    return new Page;
  }
  


}
