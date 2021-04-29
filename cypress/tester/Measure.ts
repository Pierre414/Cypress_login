interface MeasureInformation{
    description:string
    assignedTo:string
    writer:string
}

export class Measure{
    readonly description:string
    readonly assignedTo:string

    constructor(description:string,assignedTo:string){
    this.assignedTo=assignedTo;
    this.description=description;
    }

    public isAMeasure(){
        cy.get('span.label.label-measure').should("contain","Maßnahme");
      }

    public hasInformations(measureInformation:MeasureInformation){
      cy.get('div.meta').should('contain',measureInformation.assignedTo)
      cy.get('div.meta').should('contain',measureInformation.writer)
      cy.get('div.content').should('contain',measureInformation.description)
      
    }
}

