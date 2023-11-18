// File: cypress/e2e/signIn_spec.cy.ts

describe('Sign In Test', () => {
    it('should sign in and navigate to home', () => {
      // Kunjungi halaman sign in
    cy.visit('/SignIn')

    // Isi formulir sign in dengan informasi login yang benar
    cy.get('[data-cy=username]').type('user')
    cy.get('[data-cy=password]').type('admin')

    // Klik tombol sign in
    cy.get('[data-cy=signIn-button]').click()

    // Tunggu hingga sign in berhasil dan navigasi ke halaman home
    cy.url().should('include', '/home')
    cy.contains('h1', 'Welcome to Home Page')
    })
})
