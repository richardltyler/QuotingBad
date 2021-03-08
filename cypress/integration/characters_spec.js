describe('Characters Component', () => {
  beforeEach(() => {
    // cy.fixture('quotes.json')
    //   .then(response => {
    //     cy.intercept('https://www.breakingbadapi.com/api/quotes', {
    //       body: response,
    //     })
    //   });

    // cy.fixture('characters.json')
    //   .then(response => {
    //     cy.intercept('https://www.breakingbadapi.com/api/characters?name=Saul+Goodman', {
    //       body: response,
    //     })
    //   });


    cy.visit('http://localhost:3000/#/');

    cy.get('button').click();
  });

  it('Should have a Quote headline', () => {
    cy.get('h2').should('contain', 'QUOTE');
  });

  it('Should have 3 cards', () => {
    cy.get('article').should('have.length', 3);
  });
})