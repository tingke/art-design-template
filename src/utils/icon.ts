import type { App } from 'vue'
import '@icons/system/iconfont.css' // 系统图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function initIcon(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
