<h1 align="center">
  <p>Multi-Languages 🌎🌎 </p>
</h1>

<h1>
  <img 
    src="https://ik.imagekit.io/qm9zssgme/gigi_TcD0cDQJM.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1651862732941"
  />
</h1>

<h2 align="center">
  <a href="https://multi-languages.vercel.app/" target="_blank">See the site</a>
</h2>


## 🧾 About

**Dados da Nasa** Neste projeto mostro como tornar uma aplicação React em multi idiomas, dessa maneira podemos atingir público brasileiro, françês, americano...

## 🔧 Tools

- [Vite](https://vitejs.dev/) 💚
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [i18next](https://www.i18next.com/)

## 👨‍💻 How to Setup

```bash
  # Clone the project
  $ git clone https://github.com/gustavohenri316/multi-languages.git
```
```bash
  # Enter directory
  $ cd multi-languages
```

```bash
  # Install the dependencies, if you use npm or yarn
  $ npm install 
  # or
  $ yarn install
```
<p align="center">or</p>

```bash
  # Run the project
  $ yarn run dev 
  # or
  $ npm run dev 
```

<p align="center">Done with 💙 by Gustavo Henrique Gonçalves de Oliveira</p>


<h2 align="center">
  Criando esse projeto do zero
</h2>

- [Visual Studio Code](https://code.visualstudio.com/download) 

 <p> Abra o terminal, e inicie o projeto ReactJs </p>

```bash
  $ yarn create vite meu-projeto --template react-ts
  # ou 
  $ npm create vite meu-projeto --template react-ts
```
 <p> Entre na pasta que acabou de criar  </p>

```bash
  $ cd my-projeto 
```
 <p> Instale as dependencias do projeto  </p>

```bash
  $ yarn install 
  # ou
  $ npm install 
```
 <p> Abra a pasta no Visual Studio Code  </p>
 
```bash
  $ code .
```

 <p> Instale as bibliotecas que vamos utilizar no projeto (*utilize o terminal que instalou o projeto ou o proprio terminal do Visual Studo Code*)
  </p>

```bash
  $ yarn add i18next react-i18next i18next-browser-languagedetector
  # ou 
  $ npm install i18next react-i18next i18next-browser-languagedetector
```
 <p> Inicie o projeto  </p>

```bash
  $ npm run dev 
  # ou 
  $ yarn run dev
```

 <p> Cria uma pasta *i18n* dentro do *src* do deu projeto e um arquivo *index.ts* caso esteja usando TypeScript ou *index.js* e configure assim :
 </p>

 ```tsx
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)  
    .use(initReactI18next) 
    .init({
      fallbackLng: "en",   
      interpolation: {
        escapeValue: false,
      },
      resources: {      
        pt: {
          translation: {
            "KeyTitlePrincipal": "Hello, World"          }
        }
      }
})

export default  i18n; 

 ```
 <p> Se a aplicação for muito grande e tiver varias traduções voce pode dentro da pasta *i18n*  criar outra pasta com o nome *translations* ou de sua preferencia, e dentro dela pode ser criado arquivos *.json* para cada idioma.
</p> 

<img  src="https://i.ibb.co/b3txCKy/Screenshot-2.png"/>



 <p> E dentro do arquivo *index* da pasta *i18n* pode ser importado os arquivos *.json* com as traduções, segue o exemplo a baixo:
  <p>

```tsx
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';


import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptBRJson from './translations/ptBR.json'


i18n
    .use(LanguageDetector)  
    .use(initReactI18next) 
    .init({
      fallbackLng: "en",  
      interpolation: {
        escapeValue: false,
      },
      resources: {       
        en: enJson, 
        fr: frJson,
        ptBR: ptBRJson,
      }
})


export default  i18n; 
```
