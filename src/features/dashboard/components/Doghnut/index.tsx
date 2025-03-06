import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './style.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoghnutComponentProps {
  DoghnutComponent: number;
}

const DoghnutComponent: React.FC<DoghnutComponentProps> = ({ DoghnutComponent }) => {
  const cpuUsage = DoghnutComponent;
  const color = '#00DB30';

  const data = {
    labels: ['Uso', 'Disponible'],
    datasets: [
      {
        data: [cpuUsage, 100 - cpuUsage],
        backgroundColor: [color, '#F2F2F2'],
        borderWidth: 0,
        borderCapStyle: 'round',
        borderRadius: 10,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={styles.DoghnutComponentContainer}>
      <h3>Asociados Activos</h3>
      <div className={styles.chartContainer}>
        <Doughnut data={data} options={options} />
        <div className={styles.percentageOverlay}>{cpuUsage}%</div>
      </div>
    </div>
  );
};

export default DoghnutComponent;