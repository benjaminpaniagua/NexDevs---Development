describe('Prueba de visibilidad del logo', () => {
    it('El logo debe ser visible', () => {
      cy.visit('http://localhost:5173');
      cy.get('img[alt="Logo"]').should('be.visible');
    });
  });
  describe('Prueba de la sección "¿Quienes somos?"', () => {
    it('La imagen de fondo debe estar visible', () => {
      cy.visit('http://localhost:5173');
      cy.get('img[alt="imagen de quienes somos"]').should('be.visible');
    });
  });
  