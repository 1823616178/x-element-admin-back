import layBack from '@/layout_back/index'

const home = () => import('@/views/Home/index')
export const managePageData = {
    path: '/',
    component: layBack,
    redirect: '/',
    name: 'manage',
    meta: {title: '管理系统', allowBack: true},
    children: [
        {
            path: '/',
            component: home,
            name: 'Home',
            meta: {title: '首页', allowBack: true, role: "", icon: 'el-icon-s-home'}
        },
    ]
}
