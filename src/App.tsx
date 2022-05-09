import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'


function App() {
  const {t} = useTranslation()
  return (
    <div style={{color: 'azure'}}>
        <LanguageSwitcher/>
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
