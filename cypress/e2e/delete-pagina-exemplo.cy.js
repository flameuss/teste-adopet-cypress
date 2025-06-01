
describe('Verificar se o delete esta funcionando', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  })
  it('Consegue deletar todas as tarefas', () => {
    // Primeiro, selecionamos o item da lista
    cy.get('.todo-list li')
      .eq(0) // Seleciona o primeiro item da lista
      .should('have.text', 'Pay electric bill') // Verifica se o texto está correto
      .invoke('show') // Força a exibição do elemento
      .find('.destroy') // Encontra o botão 'X' (assumindo que a classe do botão é 'destroy')
      .click({ force: true });// Clica no botão 'X'

    // Verifica se o item foi removido
    cy.get('.todo-list li')
      .should('not.contain', 'Pay electric bill')
  });
  it('Para filtrar tarefas completas', () => {
    cy.contains('Completed').click({ force: true })
    cy.contains('Walk the dog').should('not.exist')
  })
})