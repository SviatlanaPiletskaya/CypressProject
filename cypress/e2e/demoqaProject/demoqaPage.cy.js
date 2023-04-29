///<reference types = "cypress"/>

describe("Test suite DemoQA", () => {
    const expectedMenuItemName = [
        'Elements',
        'Forms',
        'Alerts, Frame & Windows',
        'Widgets',
        'Interactions',
        'Book Store Application'
    ]

    before(() => {
        cy.visit('https://demoqa.com/')
    })

    it('Verification menu item name', ()=>{
        cy.get('.card')
          .should('have.length', expectedMenuItemName.length)
          
          .each(($el, idx)=>{
            expect($el.text()).to.be.equal(expectedMenuItemName[idx])
            //cy.wrap($el.text()).should('have.text', expectedMenuItemName(idx))
        })
    })

  

})