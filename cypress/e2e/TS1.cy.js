describe('my first scenario', () => {
    it('visit main page and clic top menu button', function(){
        cy.visit('https://fabrykatestow.pl')
        
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()

        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')
    })
})