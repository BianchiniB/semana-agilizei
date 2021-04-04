/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance ();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
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

        //type para digitar texto em um campo
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false}));

        //check para interagir com radiobuttons e checkboxes
        cy.get('input[value="FeMale"]').check();
        cy.get('input[type="checkbox"]').check('Cricket');
        cy.get('input[type="checkbox"]').check('Hockey');

        //select para interagir com elementos do tipo de select, combos
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia' , { force: true }); // forçar execução
        cy.get('select#yearbox').select('1997');
        cy.get('select[ng-model="monthbox"]').select('August');
        cy.get('select#daybox').select('26');
        cy.get('input#firstpassword').type('Agilizei@2020');
        cy.get('input#secondpassword').type('Agilizei@2020');

        //upload de arquivos, attachFile
        cy.get('input#imagesrc').attachFile('print.png');

        //clicar no button
        cy.get('button#submitbtn').click();

        cy.wait('@postNewtable').then((resNewtable) => {
            // chai
            expect(resNewtable.status).to.eq(200)
        })

        cy.wait('@postUsertable').then((resUsertable) => {
            // chai
            expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewtable) => {
            // chai
            expect(resNewtable.status).to.eq(200)
        })
        //url contém o valor passado
        cy.url().should('contain', 'WebTable');
        });
});

// Elementos
// input[placeholder="First Name"]
// input[ng-model^=Last]
// input[ng-model^=Email]
// input[ng-model^=Phone]
// input[value="FeMale"]
// input[type="checkbox"]

// select#Skills -- # == id
// select#countries
// select#country
// select#yearbox
// select[ng-model="monthbox"]
// select#daybox

// input#firstpassword
// input#secondpassword

// button#submitbtn