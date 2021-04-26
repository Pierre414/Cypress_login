interface RiskData {
  title: string;
  linkedProcess: string;
  reportedBy: string;
}
interface RiskControl {
  attendees: string;
  importance: string;
  probabilityOfOccurrence: string;
  probabilityOfDetectionn: string;
}

export class Risk {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  public hasInformation(riskData: RiskData): void {
    cy.get("#documentHeadTitle").should("contain", riskData.title);

    cy.get("table.metaDataHead").should((table) => {
      expect(table).to.contain(riskData.reportedBy);
      expect(table).to.contain(riskData.linkedProcess);
    });
  }

  public isAPossibleRisk(): void {
    cy.get("a.modacSkipDiagnoseLink").should((table) => {
      expect(table).to.contain("Mögliches Risiko");
    });
  }
  public manage() {
    cy.get("button.ma-button.ma-button--primary").click();
    cy.get("div.cell.small-11").should("contain", "RitaRisiko");
  }
  
  public rate(riskControl: RiskControl) {
    cy.get("a.modacChanging").contains("Bearbeiten").click();
    cy.contains(".blockUI", "Bitte warten", { timeout: 20000 }).should("not.exist");
    cy.get('select[name="Severity"]').select(riskControl.importance, {force: true});
    cy.get('select[name="Occurrence"]').select(riskControl.probabilityOfOccurrence, { force: true });
    cy.get('select[name="Detection"]').select(riskControl.probabilityOfDetectionn, { force: true });
    cy.get('tr.modacForm:contains("Teilnehmer") .select2 input').type(riskControl.attendees);
    cy.contains("div.topicselect_label", riskControl.attendees).click();
    cy.get('select[name="AcceptRisk"]').select("ja", { force: true });
    cy.get("#save").click();
  }

  public hasRating(riskControl: RiskControl) {
    cy.get("table.metaDataHead").should((table) => {
      expect(table).to.contain(riskControl.attendees);
      expect(table).to.contain(riskControl.importance);
      expect(table).to.contain(riskControl.probabilityOfDetectionn);
      expect(table).to.contain(riskControl.probabilityOfOccurrence);
    });
  }
}
