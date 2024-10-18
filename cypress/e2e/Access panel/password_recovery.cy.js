describe('Pruebas de Recuperación de Contraseña', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/Access_Panel/recover'); 
    });

    it('debería mostrar el formulario de recuperación de contraseña', () => {
        cy.get('h1').should('contain', 'Recuperar contraseña').should('be.visible');
        cy.get('p').should('contain', 'Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.').should('be.visible');
    });

    it('debería permitir ingresar un correo electrónico', () => {
        cy.get('#recovery_email').should('be.visible');
        cy.get('#recovery_email').type('sofi-arias-20@hotmail.com').should('have.value', 'sofi-arias-20@hotmail.com');
        cy.get('#recovery_confirm').click();

   
        cy.get('#recovery_password').type('NuevaContraseña123').should('have.value', 'NuevaContraseña123');
        cy.get('#recovery_confirmpassword').type('NuevaContraseña123').should('have.value', 'NuevaContraseña123');

        
        cy.get('#password_confirm').click();

     
        cy.url().should('include', 'http://localhost:5173/Access_Panel/login'); 
    });

    
});
