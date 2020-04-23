import HomePage from "../pages/HomePage";
import ChangePassword from "../pages/ChangePassword";
import Login from "../pages/Login";
import PostCreate from "../pages/PostCreate/PostCreate";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import UserDetail from "../pages/UserDetail";
import UserProfile from "../pages/UserProfile";
import { PATHS } from '../constants'
export const routes = [
    {
        path: PATHS.HOMEPAGE,
        exact: true,
        component: HomePage
    },
    {
        path: PATHS.CHANGE_PASSWORD,
        exact: true,
        component: ChangePassword
    },
    {
        path: PATHS.LOGIN,
        exact: true,
        component: Login
    },
    {
        path: PATHS.POST_CREATE,
        exact: true,
        component: PostCreate
    },
    {
        path: PATHS.POST_DETAIL,
        exact: true,
        component: PostDetail
    },
    {
        path: PATHS.REGISTER,
        exact: true,
        component: Register
    },
    {
        path: PATHS.USER_DETAIL,
        exact: true,
        component: UserDetail
    },
    {
        path: PATHS.USER_PROFILE,
        exact: true,
        component: UserProfile
    },

]