#utf-8
#language: pt

Funcionalidade: testeRegistroAutomovel - Registro no Portal
    Cenário: Registrando um seguro para automóvel
        Dado que estou na página inicial do portal Tricentis
        E clico na opção Automobile 
        Quando eu preencho a aba Enter Vehicle Data com dados válidos
        E eu preencho a aba Enter Insurant Data com dados válidos
        E eu preencho a aba Enter Product Data com dados válidos
        E eu seleciono uma opção de preço válida
        Então preencho os dados finais em Send Quote com sucesso
        E visualizo a mensagem de e-mail enviado!