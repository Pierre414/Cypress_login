import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

context("qwiki",()=>{
it("can create and link a risk", () => {
  const qwiki = new Qwiki("https://dev.testing.modac.eu/");
  const overview = qwiki.login({username: "admin",password: "modell-aachen"});
  const risk = overview.submitPossibleRisk({ 
    title: "Nicht erkennen von Konkurrenten",
    linkedProcess:'Ziele und Strategien des Unternehmens' 
  });
  risk.hasInformation({ 
    title: "Nicht erkennen von Konkurrenten",
    linkedProcess:"Ziele und Strategien des Unternehmens",
    reportedBy:"Internal Admin User" 
  });
  risk.isAPossibleRisk();
});

});
