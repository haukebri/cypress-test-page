/// <reference types="Cypress" />

  describe('Landingpage Content', () => {

    before(() => {
      cy.visit('/')
      /*
      If your environment has a basic-auth / htaccess, add the credentials as an option:
      cy.visit("/", {auth: {
        username: 'user',
        password: 'pass'
      }});
      */
    })

    it('Header and footer', () => {
      cy.get('[data-cy="header"]').should('be.visible')
      cy.get('[data-cy="logo"]').should('be.visible')
      cy.get('[data-cy="logo-claim"]').should('be.visible')
      cy.get('[data-cy="cart"]').should('be.visible')
      cy.get('[data-cy="cart-amount"]').should('be.visible')
      cy.get('[data-cy="footer-link"]').should('be.visible')
    })

    it('Important content should be visible', () => {
      cy.get('[data-cy="topseller-item"]')
        .should('be.visible')
        .should('have.length', 3)

      cy.get('[data-cy="topseller-item"]').first().find('img').should('be.visible')
      cy.get('[data-cy="topseller-item"]').first().find('span').should('be.visible')
      cy.get('[data-cy="topseller-item"]').first().find('button').should('be.visible')

      cy.get('[data-cy="all-products-link"]').should('be.visible')
      cy.get('[data-cy="ceo-text"]').should('be.visible')
    })

    it('Links are working', ()=>{
      cy.get('[data-cy="all-products-link"]').click({ force: true }) // Bad practice! Never use force if you don't have to
      cy.url().should('contain', 'products')

      cy.visit('/')
      cy.get('[data-cy="footer-link"]').click()
      cy.url().should('contain', 'imprint')
    })

  })