import { Qwiki } from "../../tester/Qwiki";

context("qwiki", () => {
  it("can login", () => {
    const qwiki = new Qwiki("https://dev.testing.modac.eu/");
    const overview = qwiki.login({username:"admin",password: "modell-aachen"});
    overview.isVisible();
  });

  it("can create a page", () => {
    const qwiki = new Qwiki("https://dev.testing.modac.eu/");
    const overview = qwiki.login({username: "admin",password: "modell-aachen"});
    const page = overview.createPage({title: "Test123",inputResponsible: "Frederic K"});
    page.isADraft({type: "Arbeitsanweisung",responsible: "Frederic Klein (MA)"
    });
  });
});
