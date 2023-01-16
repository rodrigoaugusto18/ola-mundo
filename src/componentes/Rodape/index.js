import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            <p>
            Desenvolvido por <a href='https://www.linkedin.com/in/rodrigo-augusto-180a10206/'>Rodrigo Augusto</a>.
            </p>
        </footer>
    )
}