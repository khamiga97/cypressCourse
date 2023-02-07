<input id="user_email_login" class="user_email_ajax"></input>

//wyszukiwanie po ID - #

cy.get('#user_email_login')

//wyszukiwanie po klasie - .

cy.get('.user_email_ajax')

//wyszukiwanie po tag name

cy.get('input')

//po atrybucie

cy.get('input[id="user_email_login"]')
cy.get('input[class="user_email_ajax"]')

//po tekście - <span class="elementor-button-text">ZAPISZ MNIE NA NEWSLETTER</span>

cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER')