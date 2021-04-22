import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

it("can create and link a risk", () => {
  const qwiki = new Qwiki("https://dev.testing.modac.eu/");
  const overview = qwiki.login({username: "admin",password: "modell-aachen"});
  const notRecognizingCompetitors = overview.submitPossibleRisk({ 
    title: "Nicht erkennen von Konkurrenten",
    linkedProcess:'Ziele und Strategien des Unternehmens' 
  });
  notRecognizingCompetitors.hasInformation({ 
    title: "Nicht erkennen von Konkurrenten",
    linkedProcess:"Ziele und Strategien des Unternehmens",
    reportedBy:"Internal Admin User" 
  });
  notRecognizingCompetitors.isAPossibleRisk();
});
