import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('eu preencho a aba Enter Vehicle Data', () => {
    cy.VehicleInvalid();
})

Then('o sistema deve impedir de escolher um plano', () => {
    cy.PriceInvalid()
})

And('exibe uma mensagem para retornar as abas anteriores', () => {
    cy.CompleteTheFirstThreeSetps()
})