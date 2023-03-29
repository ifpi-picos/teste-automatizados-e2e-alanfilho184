Feature: Contador de recursos

    Exibe a quantidade de recursos que estão sendo apresentados na tela no momento atual

    Scenario: Busca por um recurso conhecido que garantidamente está no banco de dados

        Given que o sistema possui mais de um recurso a ser pesquisado
        When eu começar a digitar um termo na caixa de busca
        Then o sistema deve pesquisar recursos que sejam parecidos com o termo digitado
        And exibir os recursos encontrados na tela
        And ao exibir deve também atualizar o valor do contador de recursos para a quantidade de recursos sendo exibidos