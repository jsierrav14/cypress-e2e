
describe('Login / Logout Test', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.contains('Signin').click();
    })

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type("invalid password")
        cy.contains('Sign in').click();
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })


    it('Should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd
            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click();
        })

        cy.get('ul.nav-tabs').should('be.visible')
    })


    it('Should logout from applciation', () => {
         cy.contains('username').click();
         cy.get('#logout_link').click();
         cy.url().should('include','index.html')
    })

})