describe('Turn Component', () => {
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

  it('Should be able to make a guess', () => {
    cy.get('article[id="Saul Goodman"]').click();
    cy.get('h2').should('contain', 'Correct!');
    cy.get('p').should('contain', 'It was Saul Goodman!')
  });

  it('Should be able to finish the game', () => {
    for (var i = 0; i < 10; i++) {
      cy.get('article[id="Saul Goodman"]').click();
    }

    cy.get('h3')
      .should('be.visible')
      .and('contain', 'Game Over');
    cy.get('p[class="score"]')
      .should('be.visible')
      .and('contain', 'You got 100% right');
  })
})