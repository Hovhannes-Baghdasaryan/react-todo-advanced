import { useTranslation } from 'react-i18next'
import { ELanguages } from 'types'

const useLanguageTranslation = () => {
  const { i18n } = useTranslation()

  const onLanguageChangeCallback = (language: string) => {
    i18n.changeLanguage(language)
  }

  return {
    language: i18n.language as ELanguages,
    onLanguageChangeCallback,
  }
}

export default useLanguageTranslation
