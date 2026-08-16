import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './tokens.css'
import './base.css'
import './components.css'
import './motion.css'
import './mobile.css'
import { installEnhancements } from './enhancements'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    installEnhancements(router)
  }
} satisfies Theme
