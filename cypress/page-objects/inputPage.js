/// <reference types="Cypress" />

const input = 'input[type="number"]'

class InputPage{

    typeIntoNumberField() {
        cy.get(input).clear()
        cy.get(input).type('123').should('have.value', '123')
    }

    typeLettersIntoField() {
        cy.get(input).clear()
        cy.get(input).type('abc').should('not.have.value', 'abc')
    }
}

export default InputPage