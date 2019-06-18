import Home from '../Home';

let router = [
    {
        path: '/',//首页默认加载的页面
        component: Home,
        exact: true //是否为严格模式
    }
];

export default router;