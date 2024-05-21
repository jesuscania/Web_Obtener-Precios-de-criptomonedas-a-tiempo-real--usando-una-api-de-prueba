import { useCryptoStore } from '../../store'
import styles from './TableResult.module.css'

export default function TableResult() {
    const {data,resetApp} = useCryptoStore()

    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <h2>Cotización</h2>
                <button onClick={resetApp} className={styles.button}>Volver</button>
            </div>
            <div className={styles.container2}>
                <img className={styles.img} src={`https://cryptocompare.com/${data.IMAGEURL}`} alt="imagen de criptomoneda" />
                <div>
                    <p>El precio es de <strong>{data.PRICE}</strong></p>
                    <p>Diferencia de hoy <strong>{data.CHANGE24HOUR}</strong></p>
                    <p>Precio mas alto de hoy <strong>{data.HIGHDAY}</strong></p>
                    <p>Ultima actualización <strong>{data.LASTUPDATE}</strong></p>
                    <p>Precio mas bajo de hoy <strong>{data.LOWDAY}</strong></p>
                </div>
            </div>
        </div>
    )
}
