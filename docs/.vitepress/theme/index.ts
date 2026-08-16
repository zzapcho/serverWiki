import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import './enhancements.css'
import { installEnhancements } from './enhancements'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    installEnhancements(router)
  }
} satisfies Theme
