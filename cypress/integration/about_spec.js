describe("About Component", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/')
      .get('footer a').click();
  })

  it('Should have a heading', () => {
    cy.get('h2').should('contain', 'Created by')
  })

  it('Should have Richard\'s GH profile photo', () => {
    cy.get('img.dev-image').should('have.attr', 'src', 'https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4');
  });

  it('Should have a link to Richard\'s GH profile', () => {
    cy.get('#richard a:first').should('have.attr', 'href', 'https://github.com/richardltyler');
  })

  it('Should have a link to Richard\'s LinkedIn profile', () => {
    cy.get('#richard a:last').should('have.attr', 'href', 'https://www.linkedin.com/in/richardltyler/');
  });

  it('Should have a headline for the Context section', () => {
    cy.get('h3').eq(1).should('contain', 'Context');
  });

  it('Should have discussion of whu it was created', () => {
    cy.get('p').should('contain', 'This app was created by Richard Tyler to practice using React and React Router with Asynchronous Javascript.')
  });

  it('Should list technologies', () => {
    cy.get('h3').eq(2).should('contain', 'Technologies');

    cy.get('li').should('contain', 'React.js')
      .and('contain', 'React-Router')
      .and('contain', 'FetchAPI')
      .and('contain', 'Cypress.js');
  });
})