import { contains } from "cypress/types/jquery";
import { Qwiki } from "../../tester/Qwiki";

context("In Q.wiki", () => {
  describe("as a standard user", () => {
    it("can create and link a Risk", () => {
      const qwiki = new Qwiki("https://dev.testing.modac.eu/");
      const overview = qwiki.login({
        username: "StefanStandard",
        password: "PW_StefanStandard",
      });
      const riskOverview = overview.openRiskOverview();
      const risk = overview.submitPossibleRisk({
        title: "Nicht erkennen von Konkurrenz",
        linkedProcess: "Ziele und Strategien des Unternehmens",
      });
      risk.hasInformation({
        title: "Nicht erkennen von Konkurrenz",
        linkedProcess: "Ziele und Strategien des Unternehmens",
        reportedBy: "StefanStandard",
      });
    });
  });

  describe("as a Risk manager", () => {
    it("can control a risk", () => {
      const qwiki = new Qwiki("https://dev.testing.modac.eu/");
      const overview = qwiki.login({
        username: "RitaRisiko",
        password: "PW_RitaRisiko",
      });
      const riskOverview = overview.openRiskOverview();
      const risk = riskOverview.openRisk({
        title: "Nicht erkennen von Konkurrenz",
        linkedProcess: "Ziele und Strategien des Unternehmens",
      });
      risk.manage();
      risk.rate({
        attendees: "Frederic Klein",
        importance: "6",
        probabilityOfOccurrence: "4",
        probabilityOfDetectionn: "7",
      });
      risk.hasInformation({
        title: "Nicht erkennen von Konkurrenz",
        linkedProcess: "Ziele und Strategien des Unternehmens",
        reportedBy: "StefanStandard",
      });
      risk.hasRating({
        attendees: "Frederic Klein",
        importance: "6",
        probabilityOfOccurrence: "4",
        probabilityOfDetectionn: "7",
      });
    });
  });
});
