describe('Game Component', () => {
  beforeEach(() => {
    cy.fixture('characters.json')
      .then(response => {
        cy.intercept('https://www.breakingbadapi.com/api/characters?name=Saul+Goodman', {
          body: response,
        })
      });

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
    cy.get('article #Saul Goodman').click();
    cy.get('h2')
  })
})