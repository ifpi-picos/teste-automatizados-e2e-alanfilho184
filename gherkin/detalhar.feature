Feature: Botão detalhar nos items

    Botão detalhar nos items exibidos na tela, ao ser clicado, exibe uma caixa ao topo da tela com o titulo e uma descrição daquele item
    
    Scenario: Clicar no botão detalhar de pelo menos 2 itens diferentes

        Given que o sistema possui mais de um recurso a ser pesquisado
        And que 2 ou mais recursos estejam disponíveis
        When eu clicar no botão Detalhar em um dos recursos
        Then o sistema deve fazer surgir no topo da tela um caixa com o título e uma descrição correspondentes ao recurso clicado, além de um botão para fechar a caixa
        And quando clicar novamente no botão de outro recurso
        Then o sistema deve fazer surgir outra na caixa da mesma forma da anterior, porém, com os dados do novo recurso

    Scenario: Clicar no botão Fechar na caixa que irá surgir

        Given que o sistema possui mais de um recurso a ser pesquisado
        And que 2 ou mais recursos estejam disponíveis
        When eu clicar no botão Detalhar em um dos recursos
        Then o sistema deve fazer surgir no topo da tela um caixa com o título e uma descrição correspondentes ao recurso clicado, além de um botão para fechar a caixa
        And quando clicar no botão fechar
        Then o sistema deve remover a caixa da tela, exibindo novamente a lista com os recursos