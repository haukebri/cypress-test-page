
  describe('Buying a Product', () => {

    beforeEach(() => {
      cy.visit('/products')
    })

    it('Loading products', ()=>{
      cy.server()
      cy.route('GET', '**/albums').as('albums');

      cy.get('[data-cy="product-list-loading"]').should('be.visible')
      cy.wait('@albums');

      cy.get('[data-cy="product-list-loading"]').should('not.be.visible')
      cy.get('[data-cy="product-list-item"]').should('be.visible')
    })

    it('Loading products without XHR wait', ()=>{
      cy.get('[data-cy="product-list-loading"]').should('be.visible')

      cy.get('[data-cy="product-list-loading"]').should('not.be.visible')
      cy.get('[data-cy="product-list-item"]').should('be.visible')
    })

  })