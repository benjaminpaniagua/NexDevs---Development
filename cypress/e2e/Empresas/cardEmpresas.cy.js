
describe('Tarjeta de Perfil - Servicio Verde', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/profiles/'); 
    });
  
    it('debería mostrar el nombre del servicio', () => {
      cy.get('h3')
        .contains('Servicio Verde')
        .should('be.visible')
        .and('have.class', 'font-semibold');
    });
  
    it('debería mostrar la descripción del servicio con clases y texto correctos', () => {
      cy.get('p')
        .should('be.visible')
        .and('have.class', 'h-16 xs:h-24 text-fs-med')
        .and('contain.text', 'Ofrecemos servicios de jardinería profesional, desde mantenimiento de jardines hasta paisajismo para hogares y empresas. Nuestro equipo está altamente capacitado para asegurar que tus áreas verdes luzcan perfectas todo el año.');
    });

    it('debería mostrar la información de ubicación correctamente', () => {
      
      cy.get('img[src="/images/icons/gps.svg"]')
        .should('be.visible')
        .and('have.class', 'w-5 sm:w-3');
  

      cy.get('h5')
        .contains('Escazú, San José')
        .should('be.visible')
        .and('have.class', 'text-black font-bold xs:text-[0.65rem] md:text-[0.8rem] text-fs-med');
    });
  
    it('debería mostrar la información de teléfono correctamente', () => {
    
      cy.get('img[src="/images/icons/phone.svg"]')
        .should('be.visible')
        .and('have.class', 'w-5 sm:w-3');
  
    
      cy.get('h5')
        .contains('87563412')
        .should('be.visible')
        .and('have.class', 'text-black font-bold xs:text-[0.65rem] md:text-[0.8rem] text-fs-med');
    });
  
    it('debería mostrar el número de reseñas correctamente', () => {
      cy.get('h5')
        .contains('(16 reseñas)')
        .should('be.visible')
        .and('have.class', 'text-black font-semibold text-right xs:text-[0.65rem] text-[1rem]');
    });
  
 
  
    it('debería tener el botón "Ver Perfil" visible y funcional', () => {
      cy.contains('button', 'Ver Perfil')
        .should('be.visible')
        .and('have.class', 'text-clr-white font-montserrat font-regular text-center rounded-lg border-2 transition-all duration-300 bg-clr-black border-clr-black hover:text-clr-green-dark px-16 py-2 w-full')
        .and('contain.text', 'Ver Perfil')
        
    });
  
  
  
    it('debería mostrar correctamente los atributos de accesibilidad en imágenes', () => {
      cy.get('img[alt="Profile_Picture"]')
        .should('have.attr', 'alt', 'Profile_Picture');
  
      cy.get('img[src="/images/icons/gps.svg"]')
        .should('have.attr', 'alt', '');
  
      cy.get('img[src="/images/icons/phone.svg"]')
        .should('have.attr', 'alt', '');
    });
  
  });
  