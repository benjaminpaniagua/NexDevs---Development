// cypress/e2e/profile_spec.js

describe('Página de Perfil - Limpieza Total', () => {
    // Asumiendo que la página está en la ruta "/perfil"
    beforeEach(() => {
      cy.visit('http://localhost:5173/workprofile/2'); // Reemplaza con la ruta correcta de tu aplicación
    });
  
    it('debería mostrar la imagen de perfil', () => {
      cy.get('img[alt="Foto de perfil"]')
        .should('be.visible')
        .and('have.attr', 'src', '/images/default_profile_picture.jpg');
    });
  
    it('debería mostrar el nombre del servicio y la ubicación', () => {
      cy.contains('h2', 'Limpieza Total').should('be.visible');
      cy.contains('h4', 'Desamparados, San José').should('be.visible');
    });
  

    it('debería mostrar la sección "Acerca de mí" con la descripción correcta', () => {
      cy.contains('h3', 'Acerca de mí').should('be.visible');
      cy.contains(
        'Especialistas en limpieza profunda de hogares y oficinas. Utilizamos productos ecológicos para garantizar un espacio limpio y saludable.'
      ).should('be.visible');
    });
  
    it('debería mostrar la información de contacto correctamente', () => {
      // Verificar número de teléfono
      cy.get('h4').contains('+506 87654321').should('be.visible');
  
      // Verificar email
      cy.get('h4').contains('limpiezatotal@gmail.com').should('be.visible');
  
      // Verificar enlace de WhatsApp
      cy.get('a')
        .contains('Contactar')
        .should('have.attr', 'href', 'https://wa.me/+50687654321?')
        .and('have.attr', 'target', '_blank');
    });
  
    it('debería mostrar la colección de imágenes', () => {
      cy.contains('h3', 'Mi colección').should('be.visible');
      cy.get('img[alt="collection image"]')
        .should('have.length', 4)
        .each(($img) => {
          cy.wrap($img)
            .should('be.visible')
            .and('have.attr', 'src', '/images/default_collection.webp');
        });
    });
  
    it('debería mostrar las categorías ', () => {
      cy.contains('h3', 'Categorias').should('be.visible');
      cy.get('h3')
        .contains('Categorias')
        
    });
  
    it('debería mostrar las habilidades correctamente', () => {
      cy.contains('h3', 'Habilidades').should('be.visible');
      const habilidades = ['Rápido', 'Eficiencia', 'Confianza'];
  
      habilidades.forEach((habilidad) => {
        cy.contains('p', habilidad).should('be.visible');
      });
    });
  
    it('debería tener un enlace funcional de WhatsApp', () => {
      cy.contains('a', 'Contactar')
        .should('have.attr', 'href')
        .then((href) => {
          expect(href).to.match(/^https:\/\/wa\.me\/\+50687654321\?$/);
        });
    });
  
    it('debería mostrar los iconos SVG correctamente', () => {
      // Verificar el ícono de teléfono
      cy.get('svg').first().should('exist');
  
      // Verificar el ícono de email
      cy.get('svg').eq(1).should('exist');
    });
  });
  