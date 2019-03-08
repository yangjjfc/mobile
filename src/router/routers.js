export const constantRouterMap = [
    { path: '', redirect: '/login' },
    { path: '/login', component: () => import('@/pages/login/index'), hidden: true },
]