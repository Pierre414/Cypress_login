import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

it("can create a page", () => {
  const qwiki = new Qwiki("https://dev.testing.modac.eu/");
  const overview = qwiki.login({username: "admin",password: "modell-aachen"});
  const risk = overview.createRisk({ title: "Risk123" });
  risk.isARisk({ title: "Risk123" });
});
