import axios from "axios";
import {Store} from "redux";
import {CasesDataActions} from "@/app/redux/reducers/cases.slise";


const API_URL = process.env.API_URL;

axios.defaults.baseURL = API_URL;

export const casesService = {

    async getCases(store: Store, limit: number) {
        try {
            const {data} = await axios.get('/get/cases', {
                params: {
                    limit
                }
            })
            store.dispatch(CasesDataActions.setCasesData(data))
        } catch (e) {
            console.log(e)
        }
    }


}