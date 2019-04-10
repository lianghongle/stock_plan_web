import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import TestMenu from '@/components/TestMenu'
import TestLayout from '@/components/test/Layout'
import TestTablePagination from '@/components/test/TablePagination'

import StockBasic from '@/components/stock/Basic'

// import Dashboard from '@/views/dashboard'
// import Article from '@/views/article'
// import Container from '@/container/Container'
// import Login from '@/views/Login'
// import Layout from '@/components/Layout'
// import StockBasic from '@/components/StockBasic'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },

        {
            path: '/testmenu',
            name: 'TestMenu',
            component: TestMenu
        },
        {
            path: '/test/layout',
            name: 'test_layout',
            component: TestLayout
        },
        {
            path: '/test/table_pagination',
            name: 'test_table_pagination',
            component: TestTablePagination
        },

        {
            path: '/stock/basic',
            name: 'stock_basic',
            component: StockBasic
        },

        // {
        //   path: '/layout',
        //   name: 'Layout',
        //   component: Layout
        // },
        // {
        //   path: '/stock_basic',
        //   name: 'StockBasic',
        //   component: StockBasic
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        // {
        //     path: '/',
        //     redirect: '/dashboard',
        //     name: 'Container',
        //     component: Container,
        //     children: [
        //         {
        //             path: 'dashboard',
        //             name: '首页',
        //             component: Dashboard,
        //             children: [
        //                 {
        //                     path: 'dashboard1',
        //                     name: '首页1',
        //                     component: Dashboard,
        //                 },
        //                 {
        //                     path: 'dashboard2',
        //                     name: '首页2',
        //                     component: Dashboard,
        //                     children: [
        //                         {
        //                             path: 'dashboard21',
        //                             name: '首页21',
        //                             component: Dashboard,
        //                         },
        //                         {
        //                             path: 'dashboard22',
        //                             name: '首页22',
        //                             component: Dashboard,
        //                         },
        //                     ] },
        //             ]
        //         },
        //         {
        //             path: 'article',
        //             name: '文章',
        //             component: Article,
        //         },
        //     ]
        // },
        // {
        //   path: '/container',
        //   name: 'Container',
        //   component: Container
        // },
    ]
})
