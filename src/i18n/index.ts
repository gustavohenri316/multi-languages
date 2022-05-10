//Impotação das bibliotegas principais 
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';


//Import das traduções feitas em um arquivo .json 
import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptBRJson from './translations/ptBR.json'


i18n
    .use(LanguageDetector)  // esse plugin ele verifica o idioma padrão do navegador do usuário 
    .use(initReactI18next) // disponibiliza todos os componentes através do Context-API
    .init({
      fallbackLng: "en",  // Linguagem padrão 
      interpolation: {
        escapeValue: false,
      },
      resources: {        //todas as traduções que a aplicação terá
        en: enJson, 
        fr: frJson,
        ptBR: ptBRJson,
      }
})


export default  i18n; // você precisará importa esse componente no arquivo "index" ou "main" da raiz do seu projeto.