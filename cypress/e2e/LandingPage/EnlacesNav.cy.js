
describe('Prueba de enlaces de navegación', () => {
    it('Debe navegar a la página de "Inicio"', () => {
      cy.visit('http://localhost:5173');
      cy.contains('Inicio').click();
      cy.url().should('include', '/Community_Feed/');
    });
  
    it('Debe navegar a la página de "Explorar"', () => {
      cy.visit('http://localhost:5173');
      cy.contains('Explorar').click();
      cy.url().should('include', '/profiles/');
    });
    it('Debe navegar a la página de "Comunidad"', () => {
      cy.visit('http://localhost:5173');
      cy.contains('Comunidad').click();
      cy.url().should('include', '/posts/');
    });
  });
  describe('Prueba del botón Únete', () => {
    it('Debe redirigir a la página de inicio de sesión', () => {
      cy.visit('http://localhost:5173');
      cy.contains('Únete').click();
      cy.url().should('include', '/Access_Panel/login');
    });
  });

  