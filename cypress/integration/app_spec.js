describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/');
  });

  it('Should display a header', () => {
    cy.get('header').should('be.visible');
  });

  it('Should display a footer', () => {
    cy.get('footer').should('be.visible');
  });

  it('Should have a background image', () => {
    cy.get('img').should('have.attr', 'src', 'https://www.pngitem.com/pimgs/m/190-1906199_transparent-heisenberg-clipart-heisenberg-breaking-bad-sketch-hd.png');
  });

  it('Should display a component at any url', () => {
    cy.get('main section').should('be.visible');

    cy.visit('http://localhost:3000/#/error')
      .get('main section').should('be.visible');
    
    cy.visit('http://localhost:3000/#/about')
      .get('main section').should('be.visible');
  });
})