///<reference types = "cypress"/>

describe("Test suite Actions Methods", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('typing into DOM element, use the ".type()" command', () => {
        // Text passed to .type() may include any of the special character sequences below. 
        // {backspace} Deletes character to the left of the cursor
        // {del}	Deletes character to the right of the cursor
        // {downArrow}	Moves cursor down
        // {end}	Moves cursor to the end of the line
        // {enter}	Types the Enter key
        // {esc}	Types the Escape key
        // {home}	Moves cursor to the start of the line
        // {insert}	Inserts character to the right of the cursor
        // {leftArrow}	Moves cursor left
        // {moveToEnd}	Moves cursor to end of typeable element
        // {moveToStart}	Moves cursor to the start of typeable element
        // {pageDown}	Scrolls down
        // {pageUp}	Scrolls up
        // {rightArrow}	Moves cursor right
        // {selectAll}	Selects all text by creating a selection range
        // {upArrow}	Moves cursor up

        //{alt}	    Activates the altKey modifier. Aliases: {option}
        //{ctrl}	Activates the ctrlKey modifier. Aliases: {control}
        //{meta}	Activates the metaKey modifier. Aliases: {command}, {cmd}
        //{shift}	Activates the shiftKey modifier.
        
        cy.get('.action-email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('.action-email').clear()
        cy.get('#email1').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#email1').clear().should('have.value', '') 
    })

    it('to submit a form, use the ".submit()" command', () => {
        //The subject must be a <form>

        cy.get('#couponCode1').type('someting')
        cy.get('.action-form').submit().next().should('contain', 'Your form has been submitted!')
    })

})