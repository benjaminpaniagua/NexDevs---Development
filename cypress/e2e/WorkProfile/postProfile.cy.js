

describe('Página de Publicación', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:5173/workprofile/2'); 
    });
  
    it('debería mostrar la imagen de la publicación', () => {
      cy.get('img[alt="Post_Image"]')
        .should('be.visible')
        .and('have.attr', 'src', '/images/Post_Image_Placeholder.png')
        .and('have.class', 'w-[30rem]');
    });
  
    it('debería mostrar el título de la publicación', () => {
      cy.get('h4')
        .contains('Transformación total de jardín en una casa de Puntarenas')
        .should('be.visible');
    });
  
    it('debería mostrar la descripción de la publicación', () => {
      cy.get('p')
        .should('be.visible')
        .and('have.class', 'font-normal h-20 xs:h-14 mt-2 mb-4 sm:text-fs-small')
        .and('contain.text', 'Esta semana tuve el placer de trabajar en la transformación del jardín de una hermosa casa en Puntarenas. Los propietarios querían un espacio verde que fuera funcional...');
    });
  
    it('debería mostrar la imagen de perfil del autor', () => {
      cy.get('img[alt="Foto de perfil"]')
        .should('be.visible')
        .and('have.attr', 'src', '/images/Profile_Placeholder.png')
        .and('have.class', 'max-w-10 aspect-square rounded-full border-2 border-white object-cover');
    });
 
  
    it('debería tener el botón "Ver Publicación" visible y funcional', () => {
      cy.contains('button', 'Ver Publicación')
        .should('be.visible')
        .and('have.class', 'text-clr-black rounded-lg border-2 transition-all duration-300 bg-clr-green-light hover:bg-clr-green-dark rounded-lg border-2 border-clr-green-light hover:border-clr-green-dark transition-all duration-300 p-1 mt-5')
        .and('contain.text', 'Ver Publicación')
        
  
      
    });
  
    
  
  
  });
  