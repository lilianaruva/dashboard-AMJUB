import { NavLink } from 'react-router'
import styles from './styles.module.scss'
import { FaChartBar, FaClipboardList, FaIdCard } from 'react-icons/fa'
import { ReactNode } from 'react'
import { IoMdLogOut } from 'react-icons/io'

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
            path: '/registros',
            icon: <FaClipboardList />
        },
        {
            label: 'Credenciales',
            path: '/credenciales',
            icon: <FaIdCard />
        },
    ]

    return (
        <div className={styles.Nav}>
            <div className={styles.Top}>
                <div className={styles.logo}>
                    AMJUB - CC
                </div>
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
            <div className={styles.logout}><IoMdLogOut />Cerrar Sesión</div>
        </div>
    )
}

export default Navbar