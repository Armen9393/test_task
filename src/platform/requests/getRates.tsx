import axios, { AxiosResponse } from 'axios'

export type Rates = {
    ccy?: string,
    base_ccy?: string,
    buy: number,
    sale: number,
}

export const getRates = () => {
    return axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then((res: AxiosResponse<Array<Rates>>) => res)
}