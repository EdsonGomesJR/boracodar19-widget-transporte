
<h1 align="center"> #19  Widget Transporte </h1>


O desafio #19 do [Bora Codar](https://boracodar.dev) da RocketSeat, consiste na criação de um _widget_ de transporte.


<p align="center">
  <a href="#-getting-started">Como começar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-collaborators">Collaborators</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center" id="-layout">
  <img alt="climate project gif" src="./src/assets/weatherDashboard.gif" width="100%">
</p>

## 👀 Getting Started

Para começar, no terminal do seu editor de código podemos clonar o repositório do projeto digitando o seguinte:

```bash
git clone https://github.com/EdsonGomesJR/boracodar19-widget-transporte.git

```
Depois de clonar o projeto, precisaremos instalar as dependências, com o seguinte comando:
```bash
npm install
# ou 
yarn add
```
Terminando o processo de instalação, estaremos prontos para iniciar o projeto utlizando os comandos :
```bash
npm run dev
# ou
yarn dev
```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- HTML
- CSS
- TailwindCSS
- NextJs
- JavaScript
- React
- Git e Github
- Figma

## 💻 O Projeto


O  **_Widget Transporte_** é o **#19** projeto do desafio semanal da RocketSeat, estes desafios servem para estimular a comunidade a aprender e rever conceitos, lógicas e metódos utilizados para resolver problemas/situações que acontecem no dia-a-dia de um programador, assim como aumentar o portifólio  com a criação de interfaces, componentes e sistemas funcionais.


 ### Interface

O layout inicial do pojeto foi fornecido pela equipe de designers da RocketSeat e pode ser acessado no seguinte link do **[Figma](https://www.figma.com/community/file/1238132190532383264)**. A primera parte do desafio consiste em replicar a interface proposta como na imagem abaixo.


<h2 align="center">
  API utilizada
</h2>

Utilizamos um site com APIs Open Source chamado _Open meteo_, ele é gratuito e não tem necessidade de um API_token, além dessa facilitação, ele tem um URL builder, em que você seleciona os parâmetros desejados na interface e ele te mostra a URL que deve ser utilizada.

Para mostrar os dados meteorologicos foi usado a [Weather Forecast API](https://open-meteo.com/en/docs) e para os dados de qualidade do ar, usamos o [Air Quality API](https://open-meteo.com/en/docs/air-quality-api). Além disso, vale ressaltar que foi usada a métrica Européia de classificação da qualidade do ar.

No projeto usado, utilizamos como referência a cidade de São Paulo, e consequentemente seus dados meteorologicos. Para a utilização de outras cidades, é necessário modificar as coordenadas de latitude e longitude.

_<h2 align="center" ><a href="https://weather-dashboard-eosin.vercel.app" target="_blank">Visite o projeto online</a></h2>_

## 🔖 Layout

Você pode visualizar o layout proposto pela RocketSeat através do da <a href="https://www.figma.com/community/file/1238132190532383264">imagem abaixo</a>. Disponibilizado pelo [Figma](https://figma.com) durante o período do desafio.

<p align="center" id="-layout-figma">
  <img alt="weather figma" src="./src/assets/figma-weather.png" width="100%">
</p>

## 📃 Collaborators

This challange was made by [Julia](https://gsajulia.github.io) and [Ricardo](https://rickazuo.github.io/portfolio/)
