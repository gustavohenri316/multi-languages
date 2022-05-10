import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'


function App() {
  const {t} = useTranslation() // use dentro dos componentes funcionais para acessar a função de tradução ou a instância i18n.
  return (
    <div style={{color: 'azure'}}>
        <LanguageSwitcher/> {/* Componente com os botões para selecionar a Linguagem*/}
       <h1>{t("title.welcomeToTheBest")}</h1>
       <h2>{t("subtitle.whereYouCan")}</h2>
       <button style={
        {
         background: '#FFF', 
         borderRadius: '8px',
         width: '100px',
         height: '40px',
         color: 'black',
         fontWeight: 'bold',
        }
        }
       >{t("buttons.buttonOne")}</button>
    </div>
  )
}

export default App
