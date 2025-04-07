
const seletores = {
    tab: '#selectpriceoption',
    price: '#selectsilver',
    counter: '#selectpriceoption',
    btnNext: '#nextsendquote',
    loaderPrice: '#xLoaderPrice'
}

Cypress.Commands.add('SelectPriceoOption', () => {
    cy.get(seletores.tab).should('be.visible');
    cy.log('✅ Aba "Select Price Option" validada com sucesso');

    cy.get(seletores.price).check({ force: true })

    cy.get(seletores.counter).find('span').should('have.text', '0')
    cy.log('✅ Contador de erro está zerado antes de prosseguir')

    cy.get(seletores.btnNext).click()
})

Cypress.Commands.add('PriceInvalid', () => {
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba "Select Price Option" validada com sucesso')

    cy.get(seletores.btnNext).should('not.be.visible')
    cy.log('❌ Botão de next não encontrado')
})

Cypress.Commands.add('CompleteTheFirstThreeSetps', () => {
    cy.get(seletores.loaderPrice).should('be.visible')
    cy.log('❌ Aviso encontrado!')
})