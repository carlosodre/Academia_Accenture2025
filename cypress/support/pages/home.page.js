const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('selecionarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})