// implementação dos passos descritos na feature

/// <reference types="cypress" />

Given(/^que o site não possui registros$/, () => {
	cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fx:webtable-get-vazio'
    }).as('getNewtable');
});

When(/^acessar a listagem$/, () => {
	cy.visit('WebTable.html');
});

Then(/^devo visualizar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1);
});

Given(/^que o site possui apenas um registro$/, () => {
	cy.server();
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fixture:webtable-get-unico'
    }).as('getNewtable');
});

Then(/^devo visualizar apenas um registro$/, () => {
	// selecionar um dado dentro de uma tabela, salvar como um alias e validar se contém o valor
    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
    cy.get('@gridCellPhone').should('contain.text', '3129876543');
});
