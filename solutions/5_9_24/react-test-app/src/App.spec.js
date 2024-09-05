// cypress/integration/app.spec.js
describe('App', () => {
    it('should display and interact with the Counter component', () => {
      cy.visit('/'); // Ensure this matches your app's URL
  
      // Check if App and Counter render
      cy.contains('My App').should('be.visible');
      cy.contains('Count: 0').should('be.visible');
  
      // Interact with Counter
      cy.contains('Increment').click();
      cy.contains('Count: 1').should('be.visible');
    });
  });
  