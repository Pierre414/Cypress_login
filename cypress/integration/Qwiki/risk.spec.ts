import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

context("qwiki",()=>{
// it("can create and link a risk", () => {
//   const qwiki = new Qwiki("https://dev.testing.modac.eu/");
//   const overview = qwiki.login({username: "admin",password: "modell-aachen"});
//   const risk = overview.submitPossibleRisk({ 
//     title: "Nicht erkennen von Konkurrenten",
//     linkedProcess:'Ziele und Strategien des Unternehmens' 
//   });
//   risk.hasInformation({ 
//     title: "Nicht erkennen von Konkurrenten",
//     linkedProcess:"Ziele und Strategien des Unternehmens",
//     reportedBy:"Internal Admin User" 
//   });
//   risk.isAPossibleRisk();
// });

it("user StafanStandard can create and link a Risk",()=>{
  const qwikiStefan = new Qwiki("https://dev.testing.modac.eu/");
  const overviewStefan = qwikiStefan.login({username: "StefanStandard",password: "PW_StefanStandard"});
  const risk = overviewStefan.submitPossibleRisk({ 
    title: "Nicht erkennen von Konkurrenz",
    linkedProcess:'Ziele und Strategien des Unternehmens' 
  });
    risk.hasInformation({ 
      title: "Nicht erkennen von Konkurrenz",
      linkedProcess:"Ziele und Strategien des Unternehmens",
      reportedBy:"StefanStandard" 
    });
  });

it('can control a risk',()=>{
  const qwikiRita = new Qwiki("https://dev.testing.modac.eu/");
  const overviewRita = qwikiRita.login({username: "RitaRisiko",password: "PW_RitaRisiko"});
  const risk=overviewRita.controlRisk({
    Bedeutung:"3",
    Auftretenswahrscheinlichkeit:"4",
    Entdeckungswahrscheinlichkeit:"10"
  });
  risk.hasInformation({
    title: "Nicht erkennen von Konkurrenz",
    linkedProcess:"Ziele und Strategien des Unternehmens",
    reportedBy:"StefanStandard" 
  });
  risk.hasRanking({
    Bedeutung:3,
    Auftretenswahrscheinlichkeit:4,
    Entdeckungswahrscheinlichkeit:10
  })
  
})

});
