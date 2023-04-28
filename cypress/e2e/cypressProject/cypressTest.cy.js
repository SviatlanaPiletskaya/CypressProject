///<reference types = "cypress"/>

describe("Test suite Common Methods", () => {
   
    before(() => {
        cy.visit('https://example.cypress.io/')

    })

    it('clicking "get" navigates to a new url', () => {
        cy.contains('get').click()
        cy.url().should('include', '/commands/querying')
        cy.get('#query-btn').should('contain', 'Button')
    })

})