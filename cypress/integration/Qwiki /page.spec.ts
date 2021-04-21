import { Qwiki } from "../../tester/Qwiki";

it("can create a page", () => {
    const qwiki = new Qwiki("https://dev.testing.modac.eu/");
    const overview = qwiki.login({username: "admin",password: "modell-aachen"});
    const page = overview.createPage({title: "Test123",responsible: "Frederic Klein (MA)"});
    page.isADraft({type: "Arbeitsanweisung",responsible: "Frederic Klein (MA)" });
  });