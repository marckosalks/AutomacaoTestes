

//agrupador
describe('Transações',() =>{
    //hooks -> executar antes ou depois  / de cada ou de  todos os testes
    //before
    //after
    //beforeEach 
    //afterEach
    
    beforeEach(()=>{
        //acessar a url da aplicação testada
        cy.visit("https://devfinance-agilizei.netlify.app/");    
    });

    it('Cadastrar uma entrada', ()=>{

        //chamada da função
        criarTransacao("Freela",500);

        //Assertions
        //clicarc com o botão de identificar elementos
        cy.get('[data-index="0"] > .description').should("have.text", "Freela");

        // cy.get('tbody tr td.description').should("have.text", "Freela")
    });

    //pular elementos
    it('Cadastrar uma saida' ,()=>{
      
        criarTransacao("Freela",-250);

        cy.get('[data-index="0"] > .description').should("have.text", "Freela");
    });


    it('Excluir transação' ,()=>{
        criarTransacao("Freela", 100);
        criarTransacao("Mesada", 50);
        //EXCLUSAO 1    
        
        //mapeamento contextual
        //as vezes o cypress da um elemento nada haver 
        //.parente ele sobe um nivel de selector
        //find ele encontra um elemento em especial que no caso aqui é uma img 
        
        //Primeira forma
        // cy.contains(".description" , "Freela")//td - > referencia
        // .parent()//tr
        // .find('img'). //elemento que a gente precisa
        // click();
        
        //Segunda forma
        cy.contains(".description","Freela")
        .siblings()
        .children('img')
        .click();

        cy.get('tbody tr').should('have.length', 1);
    });
    
});


//criar uma  função  == precisa ser declarada de forma global
//não declarar dentro de um it ou decribe
function criarTransacao(descricao,valor){

    //encontrar elemeno através do seu texto
   cy.contains("Nova Transação").click();

    //type usamos para escrever dentro do campo
   cy.get('#description').type(descricao);
   cy.get('#amount').type(valor);
   cy.get('#date').type("2023-04-28");
   cy.contains("button", 'Salvar').click();
}        