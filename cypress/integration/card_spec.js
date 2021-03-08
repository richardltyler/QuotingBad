describe('Card Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
      .get('.knock-button').click();
  });

  it('Should have a headline', () => {
    cy.get('article').children('h4').should('be.visible');
  });
})