import axios from "axios";


const API_URL = process.env.API_URL;

axios.defaults.baseURL = API_URL;

export const basketService = {

    async removeItem(userId: string, goodsId: string) {
        try {
            const {data} = await axios.post('/remove/basket', {userId, goodsId})
            return data
        } catch (e) {
            console.log(e)
        }
    },

    async addItem(userId: string, goodsId: string) {
        try {
            const {data} = await axios.post('/add/basket', {userId, goodsId})
            return data
        } catch (e) {
            console.log(e)
        }
    },

    async removeAll(userId: string) {
        try {
            const {data} = await axios.post('/remove/all/basket', {userId})
            return data
        } catch (e) {

        }
    }
}