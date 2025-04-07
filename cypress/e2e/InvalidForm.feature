#utf-8
#language: pt

Funcionalidade: testeRegistroAutomovel - Registro no Portal
    Cenário: Formulario Invalido
        Dado que estou na página inicial do portal Tricentis
        E clico na opção Automobile 
        Quando eu preencho a aba Enter Vehicle Data
        E eu preencho a aba Enter Insurant Data com dados válidos
        E eu preencho a aba Enter Product Data com dados válidos
        Entao o sistema deve impedir de escolher um plano
        E exibe uma mensagem para retornar as abas anteriores