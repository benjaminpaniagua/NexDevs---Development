describe('Pruebas del componente CardCategories', () => {
    const categories = [
      { title: 'Limpieza', imageUrl: '/images/categories/aire-acondicionado.jpg' },
      { title: 'Mecánica automotriz', imageUrl: '/images/categories/aire-acondicionado.jpg' },
      { title: 'Aire acondicionado', imageUrl: '/images/categories/aire-acondicionado.jpg' }
     
    ];
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/Community_Feed');
    });
  
    categories.forEach(category => {
      it(`Debe mostrar la tarjeta de la categoría ${category.title}`, () => {
        cy.contains(category.title).should('be.visible');
        cy.get(`img[alt="${category.title}"]`).should('have.attr', 'src', category.imageUrl);
      });
    });
  });
 
  
  