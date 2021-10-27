import { Template } from 'meteor/templating'
import I18N from 'meteor/ostrio:i18n'
import enCodes from '../../resources/en.i18n'

const i18nConfig = {
  settings: { //--> Config object
    defaultLocale: 'en',
    en: {
      code: 'en',
      isoCode: 'en-US',
      name: 'English'
    }
  },
  en: enCodes
}

Template.registerHelper('i18n', function (...args) {
  args.pop()
  return i18n.get(...args)
})

export const i18n = new I18N({ i18n: i18nConfig })