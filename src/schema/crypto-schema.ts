import { z } from "zod";


export const CurrencySchema = z.object({
    code : z.string(),
    name : z.string()
})

export const CryptoCurrencyResponseSchema = 
        z.object ({
            CoinInfo : z.object({
                FullName : z.string(), 
                Name : z.string()
        })
    })

export const CryptoCurrencyResponciesSchema = z.array(CryptoCurrencyResponseSchema)

export const pairSchema = z.object({
    currency : z.string(),
    cryptocurrency : z.string()
}) 

export const DataSchema = z.object({
    PRICE : z.string(),
    IMAGEURL : z.string(),
    HIGHDAY : z.string(),
    LOWDAY : z.string(),
    CHANGE24HOUR : z.string(),
    LASTUPDATE : z.string()
})