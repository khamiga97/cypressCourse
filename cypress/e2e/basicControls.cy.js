import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"

describe('my first scenario', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('test inputs', () => {

        const homePage = new HomePage();
        homePage.clicInputsTab()

        const inputPage = new InputPage();
        inputPage.typeIntoNumberField()
        inputPage.typeLettersIntoField()

    })

    it('test checkboxes', () => {

        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.checkSecondCheckbox()
    })
})