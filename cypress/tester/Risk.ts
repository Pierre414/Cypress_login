interface RiskData {
  title: string;
}

export class Risk {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  isARisk(riskData: RiskData): void {
    cy.get("#documentHeadTitle").contains("Risk123").should((table) => {
        expect(table).to.contain(riskData.title);
      });

    cy.get("a.modacSkipDiagnoseLink").should((table) => {
      expect(table).to.contain("Mögliches Risiko");
    });
  }
}
