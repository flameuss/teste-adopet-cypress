describe('API Adopet', () => {
  const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiOTE3MWE4Zi1kYTQ2LTRkNGYtYjY0Mi03NmViMjFhNGVkNmUiLCJhZG9wdGVyTmFtZSI6IkZsYW1ldXNzcyIsImlhdCI6MTc0ODcyNDE3OCwiZXhwIjoxNzQ4OTgzMzc4fQ.TEdwgTd6q0Ba-xEVkVsYYI28-V3RLH-Ow3dszdxOqwI';
})

it('Nome do perfil', () => {
  cy.request({
    method: 'GET',
    url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/b9171a8f-da46-4d4f-b642-76eb21a4ed6e',
    headers: { authorization }
  }).then((res)=>{
    expect(res.status).to.equal(200);
    expect(res.body).is.not.empty
    expect(res.body).to.have.property('perfil')
    expect(res.body.perfil.nome).to.be.equal('Flameuss')

  })
})