Feature: Busca por palavra-chave

    Caixa de busca de recursos utilizando palavras chave

    Scenario: Busca por palavra-chave utilizando termos que garantidamente estão presentes no banco de dados

        Given que o sistema possui mais de um recurso a ser pesquisado
        When eu começar a digitar um termo na caixa de busca
        Then o sistema deve pesquisar recursos que sejam parecidos com o termo digitado
        And exibir os recursos encontrados na tela

    Scenario: Busca por palavra-chave utilizando um termo que não está presente em nenhum recursos do banco de dados

        Given que o sistema possui mais de um recurso a ser pesquisado
        When eu começar a digitar um termo na caixa de busca
        Then o sistema deve pesquisar recursos que sejam parecidos com o termo digitado
        And se nenhum recurso for encontrado com este termo, exibir uma mensagem indicando que nada foi encontrado

    Scenario: Remoção de todos os caracteres do caixa de busca

        Given que o sistema possui mais de um recurso a ser pesquisado
        When eu remover todos os caracteres da caixa de busca
        Then o sistema deve voltar os recursos exibidos na tela para o estado inicial de quando a tela foi carregada a primeira vez

