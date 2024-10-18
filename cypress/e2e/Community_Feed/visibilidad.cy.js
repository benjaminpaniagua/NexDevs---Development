describe('Pruebas en Community Feed', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/Community_Feed');
    });
  
    it('Las categorías deben ser visibles', () => {
      cy.contains('Limpieza').should('be.visible');
      cy.contains('Mecánica automotriz').should('be.visible');
      cy.contains('Aire acondicionado').should('be.visible');
      cy.contains('Belleza').should('be.visible');
      cy.contains('Jardinería').should('be.visible');
      cy.contains('Cocina').should('be.visible');
      cy.contains('Fotografía').should('be.visible');
      cy.contains('Plomería').should('be.visible');
    });
  
    it('Las imágenes deben estar visibles', () => {
      cy.get('img[alt="Limpieza"]').should('be.visible');
      cy.get('img[alt="Mecánica automotriz"]').should('be.visible');
      cy.get('img[alt="Aire acondicionado"]').should('be.visible');
      cy.get('img[alt="Belleza"]').should('be.visible');
      cy.get('img[alt="Jardinería"]').should('be.visible');
      cy.get('img[alt="Cocina"]').should('be.visible');
      cy.get('img[alt="Fotografía"]').should('be.visible');
      cy.get('img[alt="Plomería"]').should('be.visible');
    });
  });
  