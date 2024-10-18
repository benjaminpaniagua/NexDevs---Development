
  describe('Footer Component Tests', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:5173');
    });
  
    
  it('Verifica la navegación a Servicios', () => {
    cy.contains('Servicios').click();
    cy.url().should('include', '/services');
  });  

  it('Verifica la navegación a Comunidad', () => {
    cy.contains('Comunidad').click();
    cy.url().should('include', '/posts');
  });

  it('Verifica la navegación a Contáctanos', () => {
    cy.contains('Contáctanos').click();
    cy.url().should('include', '/contact-us');
  });

  it('Verifica la navegación a Acerca de Nosotros', () => {
    cy.contains('Acerca de Nosotros').click();
    cy.url().should('include', '/about-us');
  });

  it('Verifica la navegación a Preguntas Frecuentes', () => {
    cy.contains('Preguntas Frecuentes').click();
    cy.url().should('include', '/faq');
  });

  it('Verifica la navegación a Términos y Condiciones', () => {
    cy.contains('Términos y Condiciones').click();
    cy.url().should('include', '/terms-and-conditions');
  });

  it('Verifica que el logo se cargue correctamente', () => {
    cy.get('footer img[alt="Logo"]').should('have.attr', 'src', '/logo/Simple_Logo.svg');
  });


  it('Verifica que el texto de copyright esté presente', () => {
    cy.contains('2024, network by NexDevs. Todos los derechos reservados.').should('exist');
  });
});
  