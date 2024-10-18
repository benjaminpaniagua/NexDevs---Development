describe('Prueba de registro', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:5173'); 
  });

  it('Debería permitir el registro con datos válidos', () => {
   
    cy.contains('button', 'Comenzar').click();
    cy.contains('a', 'Regístrate').click();

   
    cy.get('#signIn_firstname').type('Sofía');
    cy.get('#signIn_lastName').type('González');
    cy.get('#signIn_email').type('sofia@example.com');
    cy.get('#signIn_password').type('password123');
    cy.get('#signIn_confirmPassword').type('password123');
    
    
    cy.get('#user_next').click();

    
    cy.get('#user_province').select('San José');
    cy.get('#user_city').select('Escazú');

    
    cy.get('#user_bio').type('Soy estudiante de programación.');

    cy.get('#terms').check();

    
    cy.get('#user_confirm').click();

  });

});
