/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:4200/')
    cy.window()
      .then((win) => {
        cy.spy(win, 'open').as('windowOpen');
      });
    cy.get('[data-cy=clickMe]').click()
      .then(() => {
        cy.wait(1000);

        // blank window is opened and waits for updates
        cy.get('@windowOpen').should((fn) => {
          expect(fn).to.be.calledWith('', '_blank');
          const returnValue = fn.getCalls()[0].returnValue;
          // after a while the url should have changed to something like 'blob:http://localhost:{port}/{uuid}
          expect(returnValue.location.href).to.match(/blob:http:\/\/localhost:4200\/.*/);
        });
      });
  })
})
