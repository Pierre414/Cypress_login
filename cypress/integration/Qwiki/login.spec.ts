import { Qwiki } from "../../tester/Qwiki";

context("qwiki", () => {
  it("can login", () => {
    const qwiki = new Qwiki("https://dev.testing.modac.eu/");
    const overview = qwiki.login({username:"admin",password: "modell-aachen"});
    overview.isVisible();
  });


});
