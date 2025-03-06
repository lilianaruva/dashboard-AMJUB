import React from 'react';
import styles from './style.module.scss';

interface ProgressMetricProps {
  metric: number;
}

const ProgressMetric: React.FC<ProgressMetricProps> = ({ metric }) => {

  return (
    <div className={styles.containerMetric}>
      <div className={styles.topTitle}>
        <h3>Notificados</h3>
      </div>
      <div className={styles.percentageContainer}>
        <h4>{metric}%</h4>
      </div>
      <progress
        className={[styles.progressBar].join(' ')}
        max={100}
        value={metric}
      ></progress>
    </div>
  );
};

export default ProgressMetric;