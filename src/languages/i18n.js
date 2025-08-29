import {createI18n} from 'vue-i18n';
import en from '../languages/en.json';
const messages = {
    en
}

const i18n = createI18n({
    legacy:false,
    local:'en', //idioma por defecto
    // fallbackLocale: 'es', //para mostrar traducción en caso de que no esté en el idioma seleccionado
    messages
})

export default i18n;