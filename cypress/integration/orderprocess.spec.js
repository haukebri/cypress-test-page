/// <reference types="Cypress" />

beforeEach(()=>{
  cy.visit('/')
})

it('topseller', ()=>{
  cy.get('[data-cy="topseller"]').should('be.visible')
})

it('Order process', ()=>{
  cy.get('[data-cy="cart-amount"]').contains('0')
  cy.get('[data-cy="topseller-submit"]').first().click()
  cy.get('[data-cy="cart-amount"]').contains('1')

  cy.get('[data-cy="cart"]').click()
  cy.get('[data-cy="cart-fly-in"]').should('be.visible')
  cy.get('[data-cy="cart-fly-in-items"]').find('li').should('have.length', 1)

  cy.get('[data-cy="cart-fly-in-submit"]').click()
  cy.get('[data-cy="cart-fly-in-items"]').find('li').should('have.length', 0)
  cy.get('#deliverytruck').should('not.be.visible')

})