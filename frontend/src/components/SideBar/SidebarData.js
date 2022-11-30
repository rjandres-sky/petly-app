import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'

const SidebarData = [
    {
        title: 'News Feed',
        path: '/news-feed',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/profile-page',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
    },

    {
        title: 'About',
        path: '/about',
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