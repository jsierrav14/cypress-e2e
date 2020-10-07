const { before } = require("cypress/types/lodash")

describe('Feedback test',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click();
    })

    it('Should load feedback form',()=>{
      cy.get('form').should('be.visible')
    })


    it('Should fill feedback form',()=>{
         cy.get('#name').type('name')
         cy.get('#email').type('email@email.com')
         cy.get('#subject').type('Just subject')
         cy.get('#comment').type('Just my comment')
    })

    it('Should submit feedback form',()=>{
        cy.get('.btn-signin').click()
    })

    it('Should display feedback message',()=>{
         cy.get('#feedback-title').contains('FeedBack')
    })
})