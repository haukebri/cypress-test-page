
  describe('Buying a Product', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Order process', () => {
      cy.get('[data-cy="cart-amount"]').contains('0')
      cy.get('[data-cy="topseller-item"]').first().find('button').click()
      cy.get('[data-cy="cart-amount"]').contains('1')

      cy.get('[data-cy="cart"]').click()
      cy.get('[data-cy="cart-fly-in"]').should('be.visible')
      cy.get('[data-cy="cart-fly-in-items"]').find('li').should('have.length', 1)

      cy.get('[data-cy="cart-fly-in"]').find('button').click()

      cy.get('[data-cy="cart-fly-in-items"]').find('li').should('have.length', 0)
      cy.get('#deliverytruck').should('not.be.visible')
    })

    it('Cart functionality', ()=>{
      cy.get('[data-cy="cart"]').click()
      cy.get('[data-cy="cart-fly-in"]').should('be.visible')
      cy.get('[data-cy="cart-fly-in-close"]').click()
      cy.get('[data-cy="cart-fly-in"]').should('not.be.visible')
    })

  })