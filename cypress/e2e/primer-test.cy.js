describe('Prueba inicial de Cypress', () => {
    it('Carga la página de inicio', () => {
      cy.visit('http://localhost:5173'); 
      cy.get('h1').should('contain', 'Conecta tus habilidades y encuentra tu próximo proyecto'); 
    });
  });
  