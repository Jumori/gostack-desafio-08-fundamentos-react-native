

<h1 align="center">
  GoMarketplace Mobile
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/gostack-desafio-08-fundamentos-react-native?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/gostack-desafio-08-fundamentos-react-native">

  <a href="https://github.com/Jumori/gostack-desafio-08-fundamentos-react-native/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/gostack-desafio-08-fundamentos-react-native">
  </a>

</p>

<h4 align="center">
	Concluído 🚀
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#️-funcionalidades)
   * [Layout](#-layout)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Clonando o repositório](#clonando-o-repositório)
     * [Rodando o Backend](#-rodando-o-backend-servidor)
     * [Rodando a Frontend Mobile](#-rodando-o-frontend-mobile)
   * [Tecnologias](#-tecnologias)
   * [Autora](#-autora)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Projeto desenvolvido durante o **GoStack Bootcamp** oferecido pela [Rocketseat](https://nextlevelweek.com/).

Repositório com as intruções do desafio [Desafio 08: Fundamentos do React Native](https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-react-native)


## ⚙️ Funcionalidades

- [x] Usuários podem listar todos os produtos disponíveis do marketplace
- [x] Usuários podem adicionar um produto do marketplace ao carrinho
- [x] Usuários podem aumentar a quantidade de um produto que está no carrinho
- [x] Usuários podem diminuir a quantidade de um produto que está no carrinho


## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/sOrKx1cX09t2ej9scd87mS/GoMarketplace">
  <img alt="Figma" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## 🚀 Como executar o projeto

Este projeto exige que o servidor back-end esteja rodando em segundo plano.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)

### Clonando o repositório

```bash

# Clone este repositório
$ git clone git@github.com:Jumori/gostack-desafio-08-fundamentos-react-native.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd gostack-desafio-08-fundamentos-react-native

# Instale as dependências
$ yarn

```

#### 🎲 Rodando o Backend (servidor)

```bash

# Procure pelo IP da sua máquina. Geralmente ele começa com 192.168

# Execute o servidor local
$ yarn json-server --host {machine IP} server.json -p 3333

# A aplicação será aberta na porta:33333 - acesse http://localhost:3333

```

#### 🧭 Rodando o frontend mobile

```bash
# Conecte seu dispositivo mobile ou inicie o emulador em sua máquina

# Em um terminal, instale o app no seu dispositivo
# Caso esteja utilizando um dispositivo Android
$ yarn android

# Caso esteja utilizando um dispositivo iOS
$ yarn ios

# Em um segundo terminal, execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação estará disponível em seu dispositivo móvel

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[Styled Components](https://styled-components.com/)**

> Veja o arquivo  [package.json](https://github.com/Jumori/gostack-desafio-08-fundamentos-react-native/blob/master/package.json)


## 🦸 Autora

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Juliana Morikoshi 👋 [Entre em contato!](https://www.linkedin.com/in/julianamorikoshi/)
