import { faker } from '@faker-js/faker';

const OptionalProducts = [
    '#EuroProtection',
    '#LegalDefenseInsurance'
]

const seletores = {
    tab: '#enterproductdata',
    date: '#startdate',
    insurance: '#insurancesum',
    merit: '#meritrating',
    damage: '#damageinsurance',
    courtesyCar: '#courtesycar',
    btnNext: '#nextselectpriceoption',
    counter: '#enterproductdata'

}

Cypress.Commands.add('ProductData', () => {
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba validade com sucesso')

    cy.get(seletores.date).type('05/07/2025')
    cy.get(seletores.insurance).select(faker.number.int({ min: 1, max: 9 }))
    cy.get(seletores.merit).select(faker.number.int({ min: 1, max: 18 }))
    cy.get(seletores.damage).select(faker.number.int({ min: 1, max: 3 }))
    cy.get(Cypress._.sample(OptionalProducts)).check({ force: true })
    cy.get(seletores.courtesyCar).select(faker.number.int({ min: 1, max: 2 }))

    cy.get(seletores.counter).find('span').should('have.text', '0')
    cy.log('✅ Contador de erro está zerado antes de prosseguir')

    cy.get(seletores.btnNext).click()
})