///<reference types = "cypress"/>

describe("Test suite Querying Methods", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/querying')
    })

    it('clicking Button using "cy.get" command', () => {
        
        cy.get('#query-btn').should('contain', 'Button').click()
        cy.get('.query-btn').should('contain', 'Button').click()
        cy.get('#querying .well>button:first').should('contain', 'Button').click()
    })

    it('find element by data attribute using "cy.get" command', () => {
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')

        cy.get('[data-test-id="test-example"]')
        .should('have.attr', 'data-test-id', 'test-example')
        .and('have.css', 'position')
        
    })

    it("Find elements using 'cy.contains' command", () =>{
        cy.get(".query-list").contains('apples').should('have.class', 'first')

        cy.get("#querying").contains('ul', 'bananas').should('have.class', 'query-list')

        cy.get('.query-button').contains('Save Form').should('have.class', 'btn')
    })
})