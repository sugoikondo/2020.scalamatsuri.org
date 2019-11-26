import Vue from 'vue'
import { withInfo } from 'storybook-addon-vue-info'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en_US',
  silentTranslationWarn: true
})
