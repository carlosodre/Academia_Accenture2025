import { faker } from '@faker-js/faker';

const user = {
    email: faker.internet.email(),
    username: faker.internet.username().replace(/[-']/g, '')
}

const seletores = {
    tab: '#sendquote',
    email: '#email',
    phone: '#phone',
    username: '#username',
    password: '#password',
    confpassword: '#confirmpassword',
    coments: '#Comments',
    send: '#sendemail',
    counter: '#sendquote',
    alert: '.sweet-alert',
    alertbtton: '.confirm'
}

Cypress.Commands.add('SendQuote', () => {
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba "Send Quote" validada com sucesso')

    Cypress.env('username', user.username)
    Cypress.env('email', user.email)

    cy.get(seletores.email).type(Cypress.env('email'), { log: false })
    cy.get(seletores.phone).type('81998332727', { log: false })
    cy.get(seletores.username).type(Cypress.env('username'), { log: false })
    cy.get(seletores.password).type(Cypress.env('password'), { log: false })
    cy.get(seletores.confpassword).type(Cypress.env('password'), { log: false })
    cy.get(seletores.coments).type('Foi Difícil, mas eu consegui, teste de automoção finalizado com sucesso, Gloria a Deus!')

    cy.get(seletores.counter).find('span').should('have.text', '0')
    cy.log('✅ Contador de erro está zerado antes de prosseguir')

    cy.get(seletores.send).click()

    Cypress.Commands.add('ConfirmedEmail', () => {
        cy.get(seletores.alert, { timeout: 10000 }).should('be.visible')
        cy.get(seletores.alert).find('h2').should('contain', 'Sending e-mail success!')
        cy.get(seletores.alertbtton).should('be.visible').click()
    })
})