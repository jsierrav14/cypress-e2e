
describe('Password test',()=>{
    before(function(){
          cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click on the signin button',()=>{
         cy.get('#signin_button').click();
    })

    it('should click on the forgotten password',()=>{
        cy.get('.offset3 > a').click();
    })

    it('should fill email form',()=>{
       cy.get('#user_email').type('jose@gmail.com')
    })

    it('should submit the form',()=>{
       cy.contains('Send Password').click();
    })
})