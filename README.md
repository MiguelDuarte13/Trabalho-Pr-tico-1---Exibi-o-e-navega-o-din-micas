# Trabalho Prático - Semana 11

Nesta atividade, vamos evoluir o projeto em que estamos trabalhando nesse semestre, acrescentando a página de detalhes.

Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Miguel Duarte Lopes 
- Matricula: 909425
- Decreva brevemente seu projeto: 

O projeto consiste em um catálogo de animes desenvolvido com HTML, CSS e JavaScript. A página inicial apresenta uma lista de animes gerada dinamicamente a partir de uma estrutura JSON. Ao clicar em um anime, o usuário é direcionado para uma página de detalhes que exibe informações completas utilizando o ID recebido pela query string da URL.

## Prints do trabalho

![HOME-PAGE](public/image/Home%20page.png)

![TELA DE DETALHES](public/image/TELA%20DE%20DETALHES.png)

## Dados em JSON
Inclua aqui a estrutura de dados definida por você para o projeto com pelo menos dois exemplo de dados.

```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "iPhone 15",
      "preco": 6999.90,
      "categoria": "Celulares",
      "descricao": "Smartphone Apple com câmera avançada.",
      "emEstoque": true
    },
    {
      "id": 2,
      "nome": "Galaxy S24",
      "preco": 5499.90,
      "categoria": "Celulares",
      "descricao": "Celular Samsung de última geração.",
      "emEstoque": true
    }
  ]
}
```


