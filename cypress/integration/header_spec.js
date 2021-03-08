describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
  });

  it('Should have a logo that says Quoting Bad', () => {
    cy.get('h1').get('span:first').should('contain', 'Qu');
    cy.get('h1').get('span:last').should('contain', 'Ba');
  }) 

  it('Should not have a home button', () => {
    cy.get('header').should('not.contain', '.home-link')
  });

  it('Should have a home button when on the about page', () => {
    cy.visit('http://localhost:3000/#/about')
      .get('header a').should('have.class', 'home-link');
  });

  it('Should be visible on every url', () => {
    cy.visit('http://localhost:3000/#/error')
      .get('header').should('be.visible');
    
    cy.visit('http://localhost:3000/#/about')
      .get('header').should('be.visible');
  });
})