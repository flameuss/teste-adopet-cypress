describe('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Verifica mensagem de texto', () => {
    cy.get('.header__message').click();
    cy.login('ana@email.com', 'Senha123');

  })

});