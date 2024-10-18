describe('Prueba de redimensionamiento de tarjetas al hacer hover', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/Community_Feed');
    });
  
    it('Las tarjetas deben reducirse al hacer hover en Limpieza', () => {
     
      cy.get('img[alt="Limpieza"]').parent().trigger('mouseover');
  
      
      cy.wait(100);
  
     
      cy.get('img[alt="Limpieza"]').parent()
        .should('have.css', 'transform')
        .and('not.match', /none/); 
  
      
      cy.get('img[alt="Limpieza"]').parent()
        .should('have.css', 'transform')
        .and('match', /matrix\(0.95, 0, 0, 0.95, 0, 0\)/);
    });
  
    it('Las tarjetas deben reducirse al hacer hover en Mecánica automotriz', () => {
      
      cy.get('img[alt="Mecánica automotriz"]').parent().trigger('mouseover');
  
      cy.wait(100); 
  
     
      cy.get('img[alt="Mecánica automotriz"]').parent()
        .should('have.css', 'transform')
        .and('not.match', /none/); 
  
 
      cy.get('img[alt="Mecánica automotriz"]').parent()
        .should('have.css', 'transform')
        .and('match', /matrix\(0.95, 0, 0, 0.95, 0, 0\)/); 
    });
  });
  