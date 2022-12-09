describe('menu button', () => {
  it('cheges features bar visibility', () => {
    cy.visit('http://localhost:4200/pages')
    //Verificar se a barra está escondida ou não e guardar atual estado
    //Obs: Estou optando por não pressupor o estado inicial da barra porque quando rodo o projeto localmente, ela aparece exposta. Quando o Cypress roda, sua posição inicial
    //é oculta. 
    cy.get('[tag="menu-sidebar"]').then(($sideBar) => {
      if($sideBar.hasClass('menu-sidebar left expanded')){
        //clicar no botão do menu
        cy.get('[class="sidebar-toggle"]').click()
        //menu-sidebar left compacted
        //Nesse caso a barra está em formato compactado
        cy.get('[tag="menu-sidebar"]').should('not.contain.text', 'FEATURES')
      }else{
        //clicar no botão do menu
        cy.get('[class="sidebar-toggle"]').click()
        //Fazer avaliando a visibilidade da palavra "Features"
        cy.get('[tag="menu-sidebar"]').should('contain.text', 'FEATURES')
      }
    })
    

    // verificar que o estado modificou

  })
})