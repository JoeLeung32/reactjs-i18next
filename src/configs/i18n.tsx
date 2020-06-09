import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            'Welcome to React': 'Welcome to React and react-i18next',
        },
    },
    'zh-cn': {
        translation: {
            'Welcome to React': '欢迎来到 React 和 react-i18next',
        },
    },
    'zh-hk': {
        translation: {
            'Welcome to React': '歡迎嚟到 React 同埋 react-i18next',
        },
    },
    'zh-tw': {
        translation: {
            'Welcome to React': '歡迎來到 React 和 react-i18next',
        },
    },
}

const options = {
    resources,
    // lng: 'en',
    // lng: 'zh-tw',
    fallbackLng: {
        en: ['en'],
        cn: ['zh-cn'],
        my: ['zh-cn'],
        hk: ['zh-hk'],
        tw: ['zh-tw'],
        zh: ['zh-tw'],
        zhs: ['zh-cn'],
        zht: ['zh-tw'],
        'zh-cn': ['zh-cn'],
        'zh-my': ['zh-cn'],
        'zh-hk': ['zh-hk'],
        'zh-tw': ['zh-tw'],
        default: ['zh-tw', 'zh-hk', 'zh-cn', 'en'],
    },
    whitelist: [
        'en',
        'cn',
        'my',
        'hk',
        'tw',
        'zh',
        'zhs',
        'zht',
        'zh-cn',
        'zh-my',
        'zh-hk',
        'zh-tw',
    ],
    lowerCaseLng: true,
    nonExplicitWhitelist: false,
    detection: {
        order: ['querystring', 'path', 'navigator'],
        lookupQuerystring: 'lang',
    },
    interpolation: {
        escapeValue: false,
    },
    react: {
        wait: true,
        useSuspense: false,
    },
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options)
