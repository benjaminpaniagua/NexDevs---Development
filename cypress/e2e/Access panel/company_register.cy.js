describe('Prueba de registro', () => { 
    beforeEach(() => {
      cy.visit('http://localhost:5173'); 
    });
  
    it('Debería permitir el registro con datos válidos', () => {
     
      cy.contains('button', 'Comenzar').click();
      cy.contains('a', 'Regístrate').click();
      cy.contains('a', 'Regístrala aquí').click();
  
     
      cy.get('#company_name').type('Olive');
      
      cy.get('#company_email').type('olive@example.com');
      cy.get('#company_password').type('password123');
      cy.get('#company_confirmpassword').type('password123');
      
      
      cy.get('#company_next').click();
  
      
      cy.get('#company_state').select('San José');
      cy.get('#company_city').select('Escazú');
  
      cy.get('#company_number').type('84612173');
      cy.get('#company_description').type('Pasteleria.');
  
      cy.get('#terms').check();
  
      
      cy.get('#company_confirm').click();
  
    });
  
  });
  