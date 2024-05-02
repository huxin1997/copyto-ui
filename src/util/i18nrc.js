import { join } from 'path'

export const funcName = 't'
export const entry = join(__dirname, './src/')
export const fileRegExp = /\.[jt]s$/
export const output = {
  path: join(__dirname, './i18n/'),
}
export const translator = 'googlex'
export const googlexConfig = {
  from: 'en',
  to: ['zh-CN', 'ja'],
  codeLocaleMap: {
    'zh-CN': 'zh',
  },
  // proxy: 'http://127.0.0.1:1087',
}
