import { NavLink } from 'react-router'
import styles from './styles.module.scss'
import { FaChartBar, FaClipboardList } from 'react-icons/fa'
import { ReactNode } from 'react'

interface RouteItem {
    label: string
    path: string
    icon: ReactNode
}

const Navbar = () => {
    const routes: RouteItem[] = [
        {
            label: 'Dashboard',
            path: '/dashboard',
            icon: <FaChartBar />
        },
        {
            label: 'Registros',
            path: '/registers',
            icon: <FaClipboardList />
        },
    ]

    return (
        <div className={styles.Nav}>
            AMJUB - CC
            {routes.map((route) => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
                >
                    {route.icon}
                    {route.label}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar