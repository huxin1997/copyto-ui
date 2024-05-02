// import { createI18n } from '@i18n-pro/svelte'

// createI18n( {
//   namespace: 'testNamespace',
//   locale: "ja",
//   langs: {
//     zh: {
//       'hello world': '你好世界',
//     },
//     ja:{
//       "hello world": "こんにちは世界",
//     },
//   }
// })

// src/i18n.js
// import { addMessages } from 'svelte-i18n';
import { addMessages,register, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from '../locale/en.json';
import zh from '../locale/zh-CN.json';

addMessages('en', en);
addMessages('zh', zh);




const defaultLocale = 'en'
// register('en', () => import('../locale/en.json'))
// register('zh', () => import('../locale/zh-CN.json'))

// console.log(browser)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

