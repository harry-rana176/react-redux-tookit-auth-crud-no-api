import Dashboard from "../pages/dashboard/HomeScreen";
import Login from "../pages/LoginScreen";
import PageNotFound from "../pages/PageNotFound"

export const RouterConfig = [
    {
        title: 'Login',
        path: '/',
        component: Login,
        default: true,
        auth: false,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        authdefault: true,
        auth: true,
        setting: { header: true, nav: true }
    },
    {
        title: 'Page Not Found',
        path: '/',
        component: PageNotFound,
        errorpage: true,
        setting: { header: true, nav: true }
    },
]