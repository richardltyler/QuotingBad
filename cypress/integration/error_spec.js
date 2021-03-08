describe('Error Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/error');
  });

  it('Should be on the error page URL', () => {
    cy.url().should('contain', '/error');
  })
})