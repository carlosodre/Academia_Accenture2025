import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('eu preencho a aba Enter Vehicle Data com dados válidos', () => {
    cy.EnterVehicleData();
})

And('eu preencho a aba Enter Insurant Data com dados válidos',() => {
    cy.EnterInsurantData();
})

And('eu preencho a aba Enter Product Data com dados válidos', () => {
    cy.ProductData();
})

And('eu seleciono uma opção de preço válida', () => {
    cy.SelectPriceoOption();
})

Then('preencho os dados finais em Send Quote com sucesso', () => {
    cy.SendQuote();
})

And('visualizo a mensagem de e-mail enviado!', () => {
    cy.ConfirmedEmail();
})
