describe('Pruebas de Iniciar Sesión', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/Access_Panel/login');
    });
  
    it('Renderiza correctamente el formulario de inicio de sesión', () => {
      cy.get('h1').should('contain', 'Iniciar Sesión');
      cy.get('#login_email').should('be.visible');
      cy.get('#login_password').should('be.visible');
      cy.get('#login_confirm').should('be.visible');
    });
  
   
  
    it('Envía el formulario correctamente con credenciales válidas', () => {
      cy.get('#login_email').clear().type('servicioverde@gmail.com');
      cy.get('#login_password').clear().type('verde123');
      cy.get('#login_confirm').click();
  
      
      
    });
  
    it('Verifica que el enlace de "Olvidé mi contraseña" sea visible', () => {
      cy.contains('Olvidé mi contraseña').should('be.visible');
    });
  
    it('Verifica el botón de registro', () => {
      cy.contains('¿Aún no tienes una cuenta?').should('be.visible');
      cy.contains('Regístrate').click();
      
    });
  });
  