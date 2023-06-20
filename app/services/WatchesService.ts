import axios from "axios";
import {Store} from "redux";
import {WatchesDataActions} from "@/app/redux/reducers/watches.slice";


const API_URL = process.env.API_URL;

axios.defaults.baseURL = API_URL;

export const watchesService = {

    async getWatches(store: Store, limit: number = 1) {
        try {
            const {data} = await axios.get('/get/watches', {
                params: {
                    limit
                }
            })
            console.log(data)
            store.dispatch(WatchesDataActions.setWatchesData(data))
        } catch (e) {
            console.log(e)
        }
    }
}