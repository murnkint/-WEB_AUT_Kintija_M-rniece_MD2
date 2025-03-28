import { BasePage } from "../pageObjects/basePage"
import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { AppointmentSummaryPage } from "../pageObjects/appointmentSummaryPage";
import { HistoryPage } from "../pageObjects/historyPage";

describe('template spec', () => {
  beforeEach(() => {
    BasePage.visit(); 
  });
  it("Scenario 1", () => {
    // Click - Make Appointment
    HomePage.makeAppointmentButton.click();
    // Set username and password fields with the demo account credentials
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    // Click - Login
    LoginPage.loginButton.click();
    //Set the following values:
    //1. Facility - Seoul CURA Healthcare Center
    AppointmentPage.clickOnFacility.select("Seoul CURA Healthcare Center");
    //2. Check - Apply for hospital readmission
    AppointmentPage.checkApplyForHospitalReadmission.click();
    //3. Select - Medicaid
    AppointmentPage.selectHealthcareProgramButton.contains("Medicaid").click();
    //4. Set Date value by using the widget - 30
    AppointmentPage.clickOnCalender.click();
    AppointmentPage.dateValueSetByUsingtheWidget.contains(".day", "30").click();
    //5. Set comment - CURA Healthcare Service
    AppointmentPage.typeComment.type("CURA Healthcare Service");
    //6. Click - Book Appointment
    AppointmentPage.clickBookAppointment.click();
    //vi. Validate that previously set values are correct
    AppointmentSummaryPage.reviewFacility.should("contain.text", "Seoul CURA Healthcare Center");
    AppointmentSummaryPage.reviewHospitalReadmission.should("contain.text", "Yes");
    AppointmentSummaryPage.reviewHealthcareProgram.should("contain.text", "Medicaid");
    AppointmentSummaryPage.reviewDay.should("contain.text", "30");
    AppointmentSummaryPage.reviewComment.should("contain.text", "CURA Healthcare Service");
  });

  it.only("Scenario 2", () => {
    //b. Scenario 2 - Appointment history empty
    //i. Open https://katalon-demo-cura.herokuapp.com/
    //ii. Click - Make Appointment
    HomePage.makeAppointmentButton.click();
    //iii. Set username and password fields with the demo account credentials
    LoginPage.usernameField.type("John Doe");
    LoginPage.passwordField.type("ThisIsNotAPassword");
    //iv. Click - Login
    LoginPage.loginButton.click();
    //v. Click - Menu/Stack/Burger icon
    AppointmentPage.clickOnMenuIcon.click();
    //vi. Validate that the sidebar is active
    AppointmentPage.sidebarIsActive.should("have.class","active");
    //vii. Click - History
    AppointmentPage.clickOnHistory.contains("History").click();
    //viii. Validate that - No appointment - is visible 
    HistoryPage.checkHistoryAboutAppointment.contains("No appointment.").should("be.visible");  
  });
});
