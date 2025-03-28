import { BasePage } from "./basePage";

export class AppointmentPage extends BasePage {
    static get url(){
        return"#appointment";
    }

    static get clickOnFacility() {
        return cy.get("#combo_facility");
    }
    
    static get checkApplyForHospitalReadmission() {
        return cy.get("#chk_hospotal_readmission");
    }

    static get selectHealthcareProgramButton() {
        return cy.get("[class='radio-inline']");
    }

    static get clickOnCalender() {
        return cy.get("#txt_visit_date");
    }

    static get dateValueSetByUsingtheWidget() {
        return cy.get("[class='datepicker-days']");
    }
    
    static get typeComment() {
        return cy.get("#txt_comment");
    }

    static get clickBookAppointment() {
        return cy.get("#btn-book-appointment");
    }

    static get clickOnMenuIcon() {
        return cy.get("#menu-toggle");
    }

    static get sidebarIsActive() {
        return cy.get("#sidebar-wrapper");
    }

    static get clickOnHistory() {
        return cy.get("[class='sidebar-nav']");
    }
}
