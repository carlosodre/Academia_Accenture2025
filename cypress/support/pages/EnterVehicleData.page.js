import { faker } from '@faker-js/faker';

const seletores = {
    autombile: '#selectedinsurance',
    tab: '#selectedinsurance',
    make: '#make',
    engine: '#engineperformance',
    date: '#dateofmanufacture',
    seats: '#numberofseats',
    fuel: '#fuel',
    listprice: '#listprice',
    plate: '#licenseplatenumber',
    mileage: '#annualmileage',
    btnNext: '#nextenterinsurantdata',
    counter: '#entervehicledata'
}


Cypress.Commands.add('EnterVehicleData', () => {
    cy.get(seletores.autombile).should('be.visible')
    cy.log('✅ Pagina validade com sucesso')
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba validade com sucesso')

    cy.get(seletores.make).select(faker.number.int({ min: 1, max: 15 }))
    cy.get(seletores.engine).type(faker.number.int({ min: 100, max: 2000 }))
    cy.get(seletores.date).type(faker.date.past(30).toLocaleDateString('en-US'))
    cy.get(seletores.seats).select(faker.number.int({ min: 1, max: 9 }))
    cy.get(seletores.fuel).select(faker.number.int({ min: 1, max: 5 }))
    cy.get(seletores.listprice).type(faker.number.int({ min: 1000, max: 100000 }))
    cy.get(seletores.plate).type('ABC1234')
    cy.get(seletores.mileage).type(faker.number.int({ min: 100, max: 100000 }))

    cy.get(seletores.counter).find('span').should('have.text', '0')
    cy.log('✅ Contador de erro está zerado antes de prosseguir')

    cy.get(seletores.btnNext).click()
})

Cypress.Commands.add('VehicleInvalid', () => {
    cy.get(seletores.autombile).should('be.visible')
    cy.log('✅ Pagina validade com sucesso')
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba validade com sucesso')


    cy.get(seletores.engine).type(faker.number.int({ min: 100, max: 2000 }))
    cy.get(seletores.date).type(faker.date.past(30).toLocaleDateString('en-US'))
    cy.get(seletores.seats).select(faker.number.int({ min: 1, max: 9 }))
    cy.get(seletores.fuel).select(faker.number.int({ min: 1, max: 5 }))
    cy.get(seletores.listprice).type(faker.number.int({ min: 1000, max: 100000 }))
    cy.get(seletores.plate).type('ABC1234')
    cy.get(seletores.mileage).type(faker.number.int({ min: 100, max: 100000 }))

    cy.get(seletores.counter).find('span').should('not.be.eq', '0')
    cy.log('❌ Erro encontrado.')

    cy.get(seletores.btnNext).click()
})