import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'

const SidebarData = [
    {
        title: 'Home',
        path: '/news-feed',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },

    {
        title: 'Switch account',
        path: '/login',
        icon: <AiIcons.AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogout/>,
        cName: 'nav-text'
    },
]

export default SidebarData