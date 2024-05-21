import styles from './Form.module.css'
import { currencies } from '../../data/currency'
import { useCryptoStore } from '../../store'
import { useEffect, useState } from 'react'
import { Pair } from '../../types'
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader'

export default function Form() {
    //Estados
    const [pair, setPair] = useState<Pair>({
        currency : '',
        cryptocurrency : ''
    })
    const [err, setErr] = useState(false)
    const {cryptoCurrencies, fetchData, spinnerloader, startLoading} = useCryptoStore()

    //Eventos
    const handleOnChange = ( e : React.ChangeEvent<HTMLSelectElement> ) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        startLoading()
        fetchData(pair)
    }

    //Validar campos
    useEffect(()=>{
            if (Object.values(pair).includes('') ) {
                setErr(true)
            } else {
                setErr(false)
            }}
    ,[pair])

    return (
        <>
            {spinnerloader 
                ?
                <SpinnerLoader/>
                :
                <form className={styles.mainContainer} onSubmit={ handleSubmit }>
                <div className={styles.field}>
                    <label htmlFor="currency">Moneda: </label>
                    <select name="currency" id="currency" onChange={handleOnChange}>
                        <option value="">Opciones</option>
                        {currencies.map((currency)=> (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.field}>
                    <label htmlFor="cryptocurrency">Criptomoneda: </label>
                    <select name="cryptocurrency" id="cryptocurrency" onChange={handleOnChange}>
                        <option value="">Opciones</option>
                        {cryptoCurrencies.map(cryptoCurrency => (
                            <option key={cryptoCurrency.CoinInfo.Name} value={cryptoCurrency.CoinInfo.Name}>{cryptoCurrency.CoinInfo.FullName}</option>
                        ))}
                    </select>
                </div>
                <input type="submit" disabled ={err} value={err ? '*Rellena los campos*' : 'Cotizar'}/>
                </form>
            }
        </>
    )
}
