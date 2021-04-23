import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

context("In Q.wiki",()=>{

  describe("as a standard user",()=>{
it("can create and link a Risk",()=>{
  const qwiki= new Qwiki("https://dev.testing.modac.eu/");
  const overview = qwiki.login({username: "StefanStandard",password: "PW_StefanStandard"});
  const riskOverview= overview.openRiskOverview();
  const risk = overview.submitPossibleRisk({ 
    title: "Nicht erkennen von Konkurrenz",
    linkedProcess:'Ziele und Strategien des Unternehmens' 
  });
    risk.hasInformation({ 
      title: "Nicht erkennen von Konkurrenz",
      linkedProcess:"Ziele und Strategien des Unternehmens",
      reportedBy:"StefanStandard" 
    });
  });
  });

  describe('as a Risk manager',()=>{
it('can control a risk',()=>{
  const qwiki = new Qwiki("https://dev.testing.modac.eu/");
  const overview = qwiki.login({username: "RitaRisiko",password: "PW_RitaRisiko"});
  const riskOverview= overview.openRiskOverview();
  const risk=riskOverview.openRisk({title:'Nicht erkennen von Konkurrenz',linkedProcess:'Ziele und Strategien des Unternehmens'});
  risk.manage();
  risk.rate({
    Attendees:"Frederic Klein",
    importance:"3",
    probabilityOfOccurrence:"4",
    probabilityOfDetectionn:"10"
  });
  // risk.hasInformation({
  //   title: "Nicht erkennen von Konkurrenz",
  //   linkedProcess:"Ziele und Strategien des Unternehmens",
  //   reportedBy:"StefanStandard" 
  // });
  // risk.hasRanking({
  //   Bedeutung:3,
  //   Auftretenswahrscheinlichkeit:4,
  //   Entdeckungswahrscheinlichkeit:10
  // })
})  
})

});
