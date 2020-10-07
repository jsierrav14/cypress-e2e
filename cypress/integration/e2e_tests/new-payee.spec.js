const { before } = require("cypress/types/lodash")

describe('New payee test',()=>{

    before(function(){

        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.contains('Signin').click();
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.get('#login_form').should('be.visible')
            cy.login(username,password)
        })

        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('should add new payee to the list',()=>{

        cy.get('#pay_bills_tab').click();
        cy.contains('Add new Payee').click();
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
    

    })

    it('Should shouw success message',()=>{
        cy.get('#alert_content').should('be.visible').and('contain','The new payee Name was successfully created')
    })


})

