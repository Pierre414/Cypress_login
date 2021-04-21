export interface PageData {
  type:String,
  responsible:String,
  status:String
  
}
export class Page{
    
    public isVisible(){
        cy.get("div.document-header__content").should("exist");
      }

      isADraft(pageData:PageData):void{
        cy.get('div.document-header__content').contains('td','Verantwortlich:').should((table)=>{
          expect(table).to.contain(pageData.responsible);
        });

        cy.get('div.document-header__content').contains('td','Dokumententyp:').should((table)=>{
          expect(table).to.contain(pageData.type);
        });

        cy.get('a.modacSkipDiagnoseLink').should((table)=>{
          expect(table).to.contain(pageData.status);
        });
        
      }

    }