describe('Homework from section 5 of Cypress course', () =>{
    it('Go to the given page and make a screenshot', function(){
        cy.visit('https://fabrykatestow.pl/')

        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click()

        cy.get('.elementor-background-overlay').eq(1).scrollIntoView().screenshot()
    })
})