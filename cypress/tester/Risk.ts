import {Measure} from './Measure'
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
interface RiskNumber{
  importance: number;
  probabilityOfOccurrence: number;
  probabilityOfDetectionn: number;
}

interface RiskTakeAction{
  description:string,
  assignedTo:string
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
    cy.get("table.metaDataHead").should((table) => {
      expect(table).to.contain(riskControl.attendees);
      expect(table).to.contain(riskControl.importance);
      expect(table).to.contain(riskControl.probabilityOfDetectionn);
      expect(table).to.contain(riskControl.probabilityOfOccurrence);
    });
  }

  public hasRiskPriorityNumberOf(riskNumber: RiskNumber){
    const RiskPriorityNumber=riskNumber.importance*riskNumber.probabilityOfDetectionn*riskNumber.probabilityOfOccurrence;
    cy.get("table.metaDataHead").should("contain", RiskPriorityNumber);
  }

  public takeAction(riskTakeAction:RiskTakeAction){
    cy.get("a.button.tasks-btn-create").click();
    cy.contains(".blockUI", "Bitte warten", { timeout: 20000 }).should("not.exist");
    cy.get('input[name="Title"]').type('Test')
    cy.get("div.cke_wysiwyg_div").type(riskTakeAction.description);
    cy.get('.task-meta-entry:nth-child(3) .select2').click();
    cy.focused().type(riskTakeAction.assignedTo);
    cy.get(`.topicselect_label:contains(${riskTakeAction.assignedTo})`).click();
    cy.get('i.fa.fa-save').click();
    return new Measure(riskTakeAction.description,riskTakeAction.assignedTo);
  }

  public discard(){
    cy.get('button.ma-button.ma-button--primary').click();
    cy.get('button.swal2-confirm.ma-button.ma-button--primary').click();
  }
  
  public isDiscarded(){
  cy.get('a[title="Verworfenes Risiko"]').should('exist');
  }
}
