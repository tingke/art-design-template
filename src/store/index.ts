import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export interface InitStoreOptions {
  namespace: string
}

/**
 * 初始化 Store
 */
export function initStore(app: App<Element>, options: InitStoreOptions) {
  const store = createPinia()
  const { namespace } = options

  // 配置持久化插件
  store.use(
    createPersistedState({
      key: (storeId: string) => `${namespace}-${storeId}`,
      storage: localStorage,
      serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      }
    })
  )
  app.use(store)
  return store
}
