/**
 * 开发环境专用路由
 * 仅在开发环境中加载，用于开发和测试
 */

import { AppRouteRecordRaw } from '../utils/utils'
import { RouterComponents } from '../routerComponents'

/**
 * 开发环境路由配置
 * 这些路由仅在开发环境中可用
 */
export const devRoutes: AppRouteRecordRaw[] = [
    {
        path: '/dev',
        name: 'Dev',
        component: RouterComponents.AppLayout,
        meta: {
            title: '开发环境',
            icon: '&#xe628;'
        },
        children: [
            {
                path: 'icon-list',
                name: 'DevIconList',
                component: () => import('@/views/dev/icon-list/index.vue'),
                meta: {
                    title: '图标列表',
                    keepAlive: true
                }
            }
        ]
    }
]

export default devRoutes
