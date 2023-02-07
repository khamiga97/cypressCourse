//Znajdź na stronie fabryki 5 elementów po:
//id
//klasie
//po atrybucie
//po tekście


//id
cy.get('#menu-item-923')
cy.get('#menu-item-1871')
cy.get('#menu-item-1023')
cy.get('#menu-item-1692')
cy.get('#menu-item-224')

//class
cy.get('.menu-item menu-item-type-post_type menu-item-object-page menu-item-923')
cy.get('.menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1871')
cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-1023')
cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-1692')
cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-224')

//atrybut
cy.get('div[class="elementor-inner"]')
cy.get('h1[class="elementor-heading-title elementor-size-default"]')
cy.get('img[class="attachment-medium_large size-medium_large wp-image-2020"]')
cy.get('div[class="builder-item hfg-item-first col-2 desktop-left"]')
cy.get('ul[id="nv-primary-navigation-main"]')

//text
cy.get('h2').contains('SZKOŁa ONLINE DLA TESTERÓW')
cy.get('span').contains('Kompletny Proces')
cy.get('h2').contains('Praktyczna, skondensowana wiedza')
cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ')
cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!')