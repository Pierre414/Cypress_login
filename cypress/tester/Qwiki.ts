import {Overview} from './Overview'

interface QwikiLogin{
  username:string,
  password:string
}
export class Qwiki {
  private readonly Url: string;

  constructor(Url: string) {
    this.Url = Url;
  }

  public login(qwikiLogin:QwikiLogin) {
    cy.visit(this.Url);
    cy.get("input.foswikiFocus").type(qwikiLogin.username);
    cy.get("input[name*='password']").type(qwikiLogin.password);
    cy.get("input.button.primary").click();
    return new Overview(this.Url);
  }

}
