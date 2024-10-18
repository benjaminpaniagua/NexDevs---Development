describe('Pruebas del botón "Ver Todos"', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/Community_Feed');
    });
  
    it('debería mostrar el botón "Ver Todos"', () => {
      cy.get('button').contains('Ver Todos').should('be.visible');
    });
  
    it('debería tener las clases correctas', () => {
      cy.get('button').contains('Ver Todos')
        .should('have.class', 'text-clr-black')
        .and('have.class', 'rounded-lg')
        .and('have.class', 'border-2')
        .and('have.class', 'transition-all')
        .and('have.class', 'duration-300')
        .and('have.class', 'bg-clr-white')
        .and('have.class', 'border-clr-black')
        .and('have.class', 'hover:bg-clr-black')
        .and('have.class', 'hover:text-clr-white')
        .and('have.class', 'px-16')
        .and('have.class', 'py-2')
        .and('have.class', 'mt-5');
    });
  
  
    it('debería redirigir a la URL correcta al hacer clic', () => {
      
      cy.get('button').contains('Ver Todos').click();
      cy.url().should('include', 'http://localhost:5173/Profiles'); 
    });
  });
  
  describe('Pruebas del botón "Ver Más"', () => {
    beforeEach(() => {
  
      cy.visit('http://localhost:5173/Community_Feed');
    });
  
    it('debería mostrar el botón "Ver Más"', () => {
      cy.get('h2.font-clash').should('contain.text', 'Publicaciones');
      cy.get('button').contains('Ver Más').should('be.visible');
    });
  
    it('debería tener las clases correctas', () => {
      cy.get('button').contains('Ver Más')
        .should('have.class', 'text-clr-black')
        .and('have.class', 'rounded-lg')
        .and('have.class', 'border-2')
        .and('have.class', 'transition-all')
        .and('have.class', 'duration-300')
        .and('have.class', 'bg-clr-white')
        .and('have.class', 'border-clr-black')
        .and('have.class', 'hover:bg-clr-black')
        .and('have.class', 'hover:text-clr-white')
        .and('have.class', 'px-16')
        .and('have.class', 'py-2')
        .and('have.class', 'mt-7');
    });
  
  
  
    it('debería redirigir a la URL correcta al hacer clic', () => {
      cy.get('button').contains('Ver Más').click();
      cy.url().should('include', 'http://localhost:5173/posts'); 
    });
  });
  