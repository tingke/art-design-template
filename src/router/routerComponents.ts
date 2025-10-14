/**
 * 路由组件常量定义
 * 用于统一管理路由中使用的布局组件
 */

// 布局组件
export const RouterComponents = {
  // 主布局
  AppLayout: () => import('../layouts/art-app-layout/index.vue'),
  
  // Iframe 组件
  Iframe: () => import('../layouts/outside/Iframe.vue'),
  
  // 其他布局组件可以根据需要添加
}

// 获取组件的键名
export type RouterComponentKey = keyof typeof RouterComponents