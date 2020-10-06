describe('Search box text',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html') 

    })

    it('Should type into searchbox and submit width pressing enter',()=>{
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('should show search results page',()=>{
        cy.get('h2').contains('Search Results')
 
    })
})