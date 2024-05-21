import { useEffect } from 'react'
import styles from './App.module.css'
import Form from './components/Form/Form'
import { useCryptoStore } from './store'
import TableResult from './components/TableResult/TableResult'

function App() {

  const {fetchCryptos, data} = useCryptoStore()
  useEffect(() => {
    fetchCryptos()
  },[fetchCryptos])

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.app_tittle}>Cotizador de <span>Criptomonedas</span></h1>
      <div className={styles.container}>
        {!(Object.values(data).includes(''))
          ?
            <TableResult/>
          :
            <Form />
        }
      </div>
    </div>
  )
}

export default App
