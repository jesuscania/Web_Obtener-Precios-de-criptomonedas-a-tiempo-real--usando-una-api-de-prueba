import { z } from "zod"
import { CurrencySchema, CryptoCurrencyResponseSchema, pairSchema, DataSchema } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type cryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof pairSchema>
export type DataType = z.infer<typeof DataSchema>