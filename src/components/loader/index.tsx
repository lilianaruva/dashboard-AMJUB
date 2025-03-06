import logo from '../../assets/loader.png'
import styles from "./Loader.module.scss"; // Importamos los estilos

const Loader = ({ isLoading = false }: { isLoading: boolean }) => {
  if (!isLoading) return null; // Si no está cargando, no renderiza nada

  return (
    <div className={styles.loaderContainer}>
      <img src={logo} alt="Loading..." className={styles.loaderImage} />
    </div>
  );
};

export default Loader