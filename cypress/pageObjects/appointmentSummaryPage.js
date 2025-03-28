import { BasePage } from "./basePage";

export class AppointmentSummaryPage extends BasePage {
    static get url(){
        return"#summary";
    }

    static get reviewFacility() {
        return cy.get("#facility");
    }
    
    static get reviewHospitalReadmission() {
        return cy.get("#hospital_readmission");
    }

    static get reviewHealthcareProgram() {
        return cy.get("#program");
    }

    static get reviewDay() {
        return cy.get("#visit_date");
    }

    static get reviewComment() {
        return cy.get("#comment");
    }

}