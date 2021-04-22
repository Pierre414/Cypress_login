interface RiskData {
  title: string;
  linkedProcess:string;
  reportedBy:string;
}

export class Risk {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  public hasInformation(riskData: RiskData): void {
    cy.get("#documentHeadTitle").should((table) => {
        expect(table).to.contain(riskData.title);
      });

    cy.get("table.metaDataHead").should((table) => {
        expect(table).to.contain(riskData.reportedBy);
      });

    cy.get("table.metaDataHead").should((table) => {
        expect(table).to.contain(riskData.linkedProcess);
      });
}

  public isAPossibleRisk():void{
    cy.get("a.modacSkipDiagnoseLink").should((table) => {
        expect(table).to.contain("Mögliches Risiko");
      });
    }
  
}
