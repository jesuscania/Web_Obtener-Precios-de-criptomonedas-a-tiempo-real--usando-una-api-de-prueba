import axios from "axios"
import { CryptoCurrencyResponciesSchema, DataSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export async function getCryptos () {
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
    const {data : { Data }} = await axios(url)
    const result = CryptoCurrencyResponciesSchema.safeParse(Data)
    if (result.success){
        return result.data
    }
}

export async function getData(pair : Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const {data : {DISPLAY}} = await axios(url)
    const result = DataSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
}