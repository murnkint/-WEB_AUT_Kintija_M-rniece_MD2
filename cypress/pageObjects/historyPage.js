import { BasePage } from "./basePage";

export class HistoryPage extends BasePage {

    static get url(){
        return"#history";
    }

    static get checkHistoryAboutAppointment() {
        return cy.get("#history");
    }

      
}