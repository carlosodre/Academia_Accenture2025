import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que estou na página inicial do portal Tricentis', () => {
    cy.visit('/')
})

And('clico na opção Automobile', () => {
    cy.selecionarAutomobile()
})