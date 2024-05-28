describe('Auth', () => {
  it('Login with existing credentials', () => {
    cy.visit('/')
    cy.get('[data-testid="login"]').click()
    cy.contains('Welcome back!').should('be.visible')

    cy.get('#email').type('businessowner@businessowner.com')
    cy.get('#password').type('Aa123123')
  })
})