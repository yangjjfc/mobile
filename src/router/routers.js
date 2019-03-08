export const constantRouterMap = [
    { path: '', redirect: '/shop' },
    { path: '/login', component: () => import('@/pages/login/index'), hidden: true },
    { path: '/shop', component: () => import('@/pages/shop/index'), hidden: true },
]