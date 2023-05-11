This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<h1 align="center"> #10 Weather Dashboard </h1>

<p align="center">
Criação de uma página de clima é o #10 desafio <a href="https://boracodar.dev/">#BORACODAR</a> da RocketSeat<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-collaborators">Collaborators</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center" id="-layout">
  <img alt="climate project gif" src="./src/assets/weatherDashboard.gif" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- React
- Git e Github
- Figma

## 💻 Projeto

O projeto _Weather Dashboard_ foi realizado como parte do #10 desafio #BORACODAR da RocketSeat sugerido pelo professor <a href="https://github.com/maykbrito" alt="Link para o GitHub do professor Mayk Brito" target="_blank">Mayk Brito</a>.

<h1 align="center">
  Funcionalidades
</h1>

O desafio inicial foi a criação do layout de uma página com informações climáticas como o modelo mostrado em <a href="#-layout-figma">Layout</a>, após a confecção do modelo, decidimos integrar com uma API para pegar os dados dinâmicamente.

<h2 align="center">
  API utilizada
</h2>

Utilizamos um site com APIs Open Source chamado _Open meteo_, ele é gratuito e não tem necessidade de um API_token, além dessa facilitação, ele tem um URL builder, em que você seleciona os parâmetros desejados na interface e ele te mostra a URL que deve ser utilizada.

Para mostrar os dados meteorologicos foi usado a [Weather Forecast API](https://open-meteo.com/en/docs) e para os dados de qualidade do ar, usamos o [Air Quality API](https://open-meteo.com/en/docs/air-quality-api). Além disso, vale ressaltar que foi usada a métrica Européia de classificação da qualidade do ar.

No projeto usado, utilizamos como referência a cidade de São Paulo, e consequentemente seus dados meteorologicos. Para a utilização de outras cidades, é necessário modificar as coordenadas de latitude e longitude.

_<h2 align="center" ><a href="https://weather-dashboard-eosin.vercel.app" target="_blank">Visite o projeto online</a></h2>_

## 🔖 Layout

Você pode visualizar o layout proposto pela RocketSeat através do da <a href="#-layout-figma">imagem abaixo</a>. Disponibilizado pelo [Figma](https://figma.com) durante o período do desafio.

<p align="center" id="-layout-figma">
  <img alt="weather figma" src="./src/assets/figma-weather.png" width="100%">
</p>

## 📃 Collaborators

This challange was made by [Julia](https://gsajulia.github.io) and [Ricardo](https://rickazuo.github.io/portfolio/)
