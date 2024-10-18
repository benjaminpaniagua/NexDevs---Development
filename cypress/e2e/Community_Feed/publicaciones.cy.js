
     
      describe('Pruebas de Publicaciones', () => {
        beforeEach(() => {
         
          cy.visit('http://localhost:5173/Community_Feed/'); 
        });
      
        it('debería mostrar el título de Publicaciones', () => {
          cy.get('h2.font-clash').should('contain.text', 'Publicaciones');
        });
      
        it('debería mostrar las publicaciones', () => {
          cy.get('.grid .flex').should('have.length.greaterThan', 0);
        });
      
        it('debería mostrar el botón "Ver Publicación"', () => {
          cy.get('button').contains('Ver Publicación').should('be.visible');
        });
      
        it('debería permitir hacer clic en "Ver Publicación"', () => {
          cy.get('button').contains('Ver Publicación').click();

        });
        
      

      });
      