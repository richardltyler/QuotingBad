describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/');
  });

  it('Should have a link to the about page', () => {
    cy.get('footer a').should('contain', 'About');
  });

  it('Should navigate to the about page', () => {
    cy.get('footer a').click();
    cy.url().should('contain', '/about');
  });

  it('Should be visible on every url', () => {
    cy.visit('http://localhost:3000/#/error')
      .get('footer').should('be.visible');
    
    cy.visit('http://localhost:3000/#/about')
      .get('footer').should('be.visible');
  });
})