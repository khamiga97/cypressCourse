import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"

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

    it('test dropdown list', () => {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage()
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', () => {

        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })
})