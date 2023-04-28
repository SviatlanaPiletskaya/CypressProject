///<reference types = "cypress"/>

describe("Test suite Actions Methods", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('typing into DOM element, use the ".type()" command', () => {
        
        cy.get('.action-email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('.action-email').clear()
        cy.get('#email1').type('{shift}').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#email1').clear().should('have.value', '') 
    })

})