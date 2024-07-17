describe('audio context', () => {
  it('load correctly the module', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Load').click();
    cy.get('body').should('have.text', 'Loaded');
  })
})
