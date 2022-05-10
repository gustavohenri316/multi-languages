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

 Abra o terminal, e inicie o projeto ReactJs 

```bash
  $ yarn create vite meu-projeto --template react-ts
  # ou 
  $ npm create vite meu-projeto --template react-ts
```
 Entre na pasta que acabou de criar  

```bash
  $ cd my-projeto 
```
Instale as dependencias do projeto  

```bash
  $ yarn install 
  # ou
  $ npm install 
```
 Abra a pasta no Visual Studio Code  

```bash
  $ code .
```

 Instale as bibliotecas que vamos utilizar no projeto (*utilize o terminal que instalou o projeto ou o proprio terminal do Visual Studo Code*)
  

```bash
  $ yarn add i18next react-i18next i18next-browser-languagedetector
  # ou 
  $ npm install i18next react-i18next i18next-browser-languagedetector
```
 Inicie o projeto  

```bash
  $ npm run dev 
  # ou 
  $ yarn run dev
```

 Cria uma pasta *i18n* dentro do *src* do deu projeto e um arquivo *index.ts* caso esteja usando TypeScript ou *index.js* e configure assim :


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
 Se a aplicação for muito grande e tiver varias traduções voce pode dentro da pasta *i18n*  criar outra pasta com o nome *translations* ou de sua preferencia, e dentro dela pode ser criado arquivos *.json* para cada idioma.
 

<img  src="https://i.ibb.co/b3txCKy/Screenshot-2.png"/>



  E dentro do arquivo *index* da pasta *i18n* pode ser importado os arquivos *.json* com as traduções, segue o exemplo a baixo:


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
 Dentro do arquivo raiz do seu projeto importe o componente *i18n* que acabamos de criar 

<img src="https://i.ibb.co/hLspvyH/raiz.png"/>

Depois disso você podera fazer as traduções usando a hook *useTranslation()* importanto {t} ou {i18n}

```tsx
import { useTranslation } from 'react-i18next'

function App() {
  const {t} = useTranslation() 
  return (
    <div style={{color: 'azure'}}>
       <h1>{t("title.welcomeToTheBest")}</h1>
       <h2>{t("subtitle.whereYouCan")}</h2>
       <button>{t("buttons.buttonOne")}</button>
    </div>
  )
}
export default App
```
Você pode utilizar o t() para fazer as traduções do seu componente, dentro dos () você coloca as chaves que ficarar dentro dos arquivos .json com as devidas traduções:

<img src="https://i.ibb.co/X50Dhds/trad.png"/>


Você pode criar um componente onde mudará o idioma da sua aplicação.

```tsx
// imagens contendo as bandeiras dos países
import br from '../../assets/br.svg'
import us from '../../assets/us.svg'
import fr from '../../assets/fr.svg'
//importação do Hook de tradução
import { useTranslation } from 'react-i18next'

import './styles.css'
// Array de Objetos contendo as todas traduções
const languageOptions = [
  {
    name: 'Português',
    value: 'ptBR',
    flag: br
  },
  {
    name: 'English',
    value: 'en',
    flag: us
    },
  {
    name: 'Français',
    value: 'fr',
    flag: fr
  },
]

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()  
 
  return (
  <>
    <div className='language-switcher'>
        <span>{t('selectYourLanguage')}</span>
        {/* Map para carregar os botões de tradução com as bandeiras */}
        {languageOptions.map(languageOption => (
          <button
            key={languageOption.value}
            onClick={() => {
              i18n.changeLanguage(languageOption.value)
              {/*Nesse onClick eu chamei i18n com a função changeLanguage, passando o value do idioma que eu escolher, e isso mudara o idioma de toda minha aplicação e não somente do meu componente*/}
            }}
          >
            <img src={languageOption.flag} alt={languageOption.name}/>
            <span
            style={{
              fontWeight: i18n.language === languageOption.value ? 'bold' : 'normal',
              textDecoration: i18n.language === languageOption.value ? 'underline' : 'none',
            }}
            >{languageOption.name}</span> 
          </button>
        ))}
    </div>
  </>
  )
}

```