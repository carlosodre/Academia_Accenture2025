import { faker } from '@faker-js/faker';

const genero = [
    '#gendermale',
    '#genderfemale'
]

const hobbies = [
    '#speeding',
    '#bungeejumping',
    '#cliffdiving',
    '#skydiving',
    '#other',
]

const seletores = {
    tab: '#enterinsurantdata',
    firstName: '#firstname',
    LastName: '#lastname',
    birthdate: '#birthdate',
    street: '#streetaddress',
    Country: '#country',
    Zipcode: '#zipcode',
    City: '#city',
    Occupation: '#occupation',
    WebSite: '#website',
    picture: '#picturecontainer',
    btnNext: '#nextenterproductdata',
    counter: '#enterinsurantdata'
}

Cypress.Commands.add('EnterInsurantData', () => {
    cy.get(seletores.tab).should('be.visible')
    cy.log('✅ Aba validade com sucesso')

    cy.get(seletores.firstName).type(faker.person.firstName().replace(/[-']/g, '')) //para tirar o -
    cy.get(seletores.LastName).type(faker.person.lastName().replace('-', ''))
    cy.get(seletores.birthdate).type(faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toLocaleDateString('en-US'))
    cy.get(Cypress._.sample(genero)).check({ force: true })
    cy.get(seletores.street).type(faker.location.streetAddress())
    cy.get(seletores.Country).select('United States')
    cy.get(seletores.Zipcode).type(faker.location.zipCode('#####'))
    cy.get(seletores.City).type(faker.location.city())
    cy.get(seletores.Occupation).select(Math.floor(Math.random() * 5) + 1)
    cy.get(Cypress._.sample(hobbies)).check({ force: true })
    cy.get(seletores.WebSite).type(faker.internet.url())
    cy.get(seletores.picture).selectFile('MinhaFoto.jpeg', { force: true })

    cy.get(seletores.counter).find('span').should('have.text', '0')
    cy.log('✅ Contador de erro está zerado antes de prosseguir')

    cy.get(seletores.btnNext).click()
})