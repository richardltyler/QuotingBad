describe('Start Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/');
  });

  it('Should be at the home url', () => {
    cy.url().should('eq', 'http://localhost:3000/#/');
  });

  it('Should have a Rules headline', () => {
    cy.get('h2').should('contain', 'RULES');
  });

  it('Should explain the rules', () => {
    cy.get('p').should('contain', 'You will be given 10 quotes from Breaking Bad or Better Call Saul and 3 characters.')
      .and('contain', 'Choose the character that you think authored the quote.')
      .and('contain', 'Refreshing or leaving the page will start a new game.');
  });

  it('Should give instructions to start the game', () => {
    cy.get('h3').should('contain', 'Be the one who knocks to start a game.');
  });

  it('Should have a button to start the game', () => {
    cy.get('button').should('contain', 'KNOCK').click();

    cy.get('h2').should('contain', 'QUOTE');
  });

})