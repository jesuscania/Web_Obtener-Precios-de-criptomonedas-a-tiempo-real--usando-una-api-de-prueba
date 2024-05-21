import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DataType, Pair, cryptoCurrency } from "./types";
import { getCryptos, getData } from "./services/ApiServices";

type CryptoStore = {
    cryptoCurrencies : cryptoCurrency[]
    data : DataType
    fetchCryptos : () => Promise<void>
    fetchData : (pair : Pair) => Promise<void>
    resetApp : () => void,
    startLoading : () => void,
    spinnerloader : boolean
}
const initialData = {
    PRICE : '',
    IMAGEURL : '',
    HIGHDAY : '',
    LOWDAY : '',
    CHANGE24HOUR : '',
    LASTUPDATE : ''
}

export const useCryptoStore = create<CryptoStore>()(
    devtools((set) => ({
            data : initialData,
            spinnerloader : false,
            cryptoCurrencies : [],
            fetchCryptos : async () => {
                const cryptoCurrencies = await getCryptos()
                set(()=> ({
                    cryptoCurrencies
                }))},
            fetchData : async (pair) => {
                const result = await getData(pair)
                set(() => ({
                    data : result,
                    spinnerloader : false
                }))
            },
            startLoading : () => {
                set(()=> ({
                    spinnerloader : true
                }))
            },
            resetApp : () => {
                set(()=> ({
                    data : initialData
                }))
            }
        })
    )
)