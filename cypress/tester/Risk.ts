interface RiskData {
  title: string;
  linkedProcess: string;
  reportedBy: string;
}
interface RiskControl{
  Attendees:string,
  importance:string,
  probabilityOfOccurrence:string,
  probabilityOfDetectionn:string
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
  public manage(){
    cy.get('button.ma-button.ma-button--primary.text-center').click();
    cy.get('div.cell.small-11').should('contain', 'RitaRisiko')
  }

  public rate(riskControl:RiskControl){
    cy.get('a.modacChanging').contains('Bearbeiten').click();
    cy.contains('.blockUI', 'Bitte warten',{timeout:20000}).should('not.exist');
    cy.get('select[name="Severity"]').select('3',{force: true});
    cy.get('select[name="Occurrence"]').select('6',{force: true});
    cy.get('select[name="Detection"]').select('5',{force: true});
    cy.get('tr.modacForm:contains("Teilnehmer") .select2 input').type(riskControl.Attendees);
    cy.contains("div.topicselect_label", riskControl.Attendees).click();
    cy.get('select[name="AcceptRisk"]').select('ja',{force: true});
    // cy.get('#save').click()
  }
}
