
  describe('Buying a Product', () => {

    beforeEach(() => {
      cy.visit('/products')
    })

    it('Loading products', ()=>{
      cy.get('[data-cy="product-list-loading"]').should('be.visible')

      cy.get('[data-cy="product-list-loading"]').should('not.be.visible')
      cy.get('[data-cy="product-list-item"]').should('be.visible')
    })

  })