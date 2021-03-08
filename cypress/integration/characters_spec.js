describe('Characters Component', () => {
  beforeEach(() => {
    cy.fixture('quotes.json')
      .then(response => {
        cy.intercept('https://www.breakingbadapi.com/api/quotes', {
          body: response,
        })
      });


    cy.visit('http://localhost:3000/#/');

    cy.get('button').click();
  });

  it('Should have 3 cards', () => {
    cy.get('article').should('have.length', 3);
  });

  it('Should only have one correct answer card', () => {
    cy.get('article[id="Saul Goodman"]').should('have.length', 1);
  })
})