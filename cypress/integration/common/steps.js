// steps comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
    // rotas
    // POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    // POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    // GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
    cy.server();
    cy.route({
        method: 'POST',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: {}
      }).as('postNewtable');

      cy.route({
        method: 'POST', 
        url: '**/api/1/databases/userdetails/collections/usertable?**', 
        status: 200, 
        response: {}
      }).as('postUsertable');

      cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: {}
        }).as('getNewtable');

      cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/usertable?**',
        status: 200,
        response: {}
        }).as('getUsertable');

    //baseUrl +
    cy.visit('Register.html');
});