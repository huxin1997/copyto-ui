import { createI18n } from '@i18n-pro/svelte'

createI18n( {
  namespace: 'testNamespace',
  locale: "ja",
  langs: {
    zh: {
      'hello world': '你好世界',
    },
    ja:{
      "hello world": "こんにちは世界",
    },
  }
})