describe('API Adopet', () => {
  // const tempoEsperado = Math.random() * 10000
  
  it('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/0f5d3191-6036-4b4e-97cd-31a1b27adf9e',
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
      // expect(res.duration).to.be.lte(tempoEsperado)
    })
  })
})