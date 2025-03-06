import DoghnutComponent from '../../features/dashboard/components/Doghnut'
import ProgressMetric from '../../features/dashboard/components/Progress'
import styles from './styles.module.scss'

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <div className={styles.top}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.DashGrid}>
                <div className={styles.Card}>
                    <h5>Total de Asociados</h5>
                    <h6>20</h6>
                </div>
                <div className={styles.Card}>
                    <ProgressMetric metric={20}/>
                </div>
                <div className={styles.Card}>
                    <DoghnutComponent DoghnutComponent={20} />
                </div>
                <div className={styles.Card}>
                    hola
                </div>
            </div>

        </div>
    )
}

export default Dashboard