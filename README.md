# hello-world

Um projeto "hello world" onde você gera uma mensagem "Olá, \<nome\>!" para qualquer nome.

## 📌 Índice
- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Uso](#️-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração](#️-configuração)
- [Contribuição](#-contribuição)

## 📖 Sobre
Um projeto feito com um objetivo didático de aprender o básico de html, tailwind e typescript.

## 🛠 Tecnologias
Tecnologias usadas:
- HTML (esqueleto da página)
- [tailwindcss](https://tailwindcss.com/) (estilo da página)
- [typescript](https://www.typescriptlang.org/) (funcionalidade da página)

## 🚀 Instalação
Passo a passo para rodar o projeto localmente.

```sh
# clone o repositório
git clone https://github.com/oDaniel728/hello-world-js

# entre na pasta
cd projeto

# instale as dependências
npm install

# converta os arquivos typescript
npx tsc
```

## ▶️ Uso
Rode abrindo o `index.html` ou usando o **Live Server**

## 📂 Estrutura do Projeto

- [scripts-ts](scripts-ts) - os scripts typescript
  - [index.ts](scripts-ts/index.ts) - script da página principal
- [scripts](scripts) - a saída dos scripts typescript
- [index.html](index.html) - página principal

```text
scripts/
 └─ index.js
scripts-ts/
 └─ index.ts
index.html
```

## ⚙️ Configuração

As configurações do typescript estão em [tsconfig.json](tsconfig.json)

## 🤝 Contribuição

Como contribuir:

1. Faça um fork
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit (`git commit -m 'Adiciona nova feature'`)
4. Push (`git push origin feature/nova-feature`)
5. Abra um Pull Request