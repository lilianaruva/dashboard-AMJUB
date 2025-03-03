import { Outlet } from "react-router";
import Navbar from "../navbar";
import styles from './index.module.scss'

const Layout = () => {
    return (
        <div className={styles.PrincipalLayout}>
            <Navbar />
            <div className={styles.ContentLayout}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout