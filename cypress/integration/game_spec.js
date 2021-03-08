describe('Game Component', () => {
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

  it('Should display a quote', () => {
    cy.get('h3').should('contain', 'I am not in danger, Skyler. I am the danger!')
  });

  it('Should display 3 cards', () => {
    cy.get('article').should('have.length', 3);
  });

  it('Should be able to make a guess', () => {
    cy.get('article[id="Saul Goodman"]').click();
    cy.get('h2').should('contain', 'Correct!');
  })

  it.only('Should be able to finish the game', () => {
    for (var i = 0; i < 10; i++) {
      cy.get('article[id="Saul Goodman"]').click();
    }

    cy.get('h3').should('be.visible');
    cy.get('p[class="score"]').should('be.visible');
  })
})