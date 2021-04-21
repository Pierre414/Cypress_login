import { Overview } from "./Overview";

interface QwikiLogin {
  username: string;
  password: string;
}
export class Qwiki {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public login(qwikiLogin: QwikiLogin) {
    cy.visit(this.url);
    cy.get("input.foswikiFocus").type(qwikiLogin.username);
    cy.get("input[name*='password']").type(qwikiLogin.password);
    cy.get("input.button.primary").click();
    return new Overview(this.url);
  }
}
