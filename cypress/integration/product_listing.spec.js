/// <reference types="Cypress" />

  describe('Buying a Product', () => {

    beforeEach(() => {
      cy.visit('/products')
    })

    it('Loading products', ()=>{
      // Setup to wait for a route
      cy.server() // Start the cypress server to be able to fetch xhr requests
      cy.route('GET', '**/albums').as('albums'); // Name the route

      cy.get('[data-cy="product-list-loading"]').should('be.visible')
      cy.wait('@albums'); // Wait for the route to return a 2xx status

      cy.get('[data-cy="product-list-loading"]').should('not.be.visible')
      cy.get('[data-cy="product-list-item"]').should('be.visible')
    })

    it('Loading products without XHR wait', ()=>{
      cy.get('[data-cy="product-list-loading"]').should('be.visible')

      cy.get('[data-cy="product-list-loading"]').should('not.be.visible')
      cy.get('[data-cy="product-list-item"]').should('be.visible')
    })

  })