describe('Error Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/error');
  });

  it('Should be on the error page URL', () => {
    cy.url().should('contain', '/error');
  });

  it('Should have a headline', () => {
    cy.get('h2').should('contain', 'Real smooth. Slippin\' Jimmy went and got an error.');
  });

  it('Should have instructions', () => {
    cy.get('h3').should('contain', 'Try again later or go to About to contact the developers with questions!');
  });
})