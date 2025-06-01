it('Verifica imagens dos animais', () => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  cy.get('.cards').should('be.visible');

})