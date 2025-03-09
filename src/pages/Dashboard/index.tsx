import { useState } from "react";
import DoghnutComponent from "../../features/dashboard/components/Doghnut";
import ProgressMetric from "../../features/dashboard/components/Progress";
import styles from "./styles.module.scss";
import { TextField } from "@mui/material";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 7));


    return (
        <div className={styles.Dashboard}>
            <div className={styles.Top}>
                <div>
                    <h1>Dashboard</h1>
                    <p>Resumen de datos de {selectedDate}</p> {/* 📌 Aquí se actualiza dinámicamente */}
                </div>
                <TextField
                    type="month"
                    variant="outlined"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    sx={{ width: "200px", marginLeft: "20px" }}
                />
            </div>

            <div className={styles.DashGrid}>
                <div className={styles.Card}>
                    <h5>Total de Asociados</h5>
                    <h6>20</h6>
                </div>
                <div className={styles.Card}>
                    <ProgressMetric metric={20} />
                </div>
                <div className={styles.Card}>
                    <DoghnutComponent DoghnutComponent={20} />
                </div>
                <div className={styles.Card}>
                    hola
                </div>
            </div>
        </div>
    );
};

export default Dashboard;