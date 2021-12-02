
import {stayService } from "../services/stay.service.js"

export const stayStore = {
    state: {
        stays: []
    },
    getters: {
        stays(state) {return state.stays},

    },
    mutations: {
        setStays(state,{stays}) {
            state.stays = stays
        },
         setStay(state,{stays}) {
            state.stay = stays.find(stay=>stay.id===stayId)
        }
    },
    actions: {
        async loadStays({commit}) {
            try  {
                var stays = await stayService.query()
                commit({type:'setStays', stays})
            }catch (err) {
                console.log('had trouble retriving from query in store:' , err)
                throw err;
            }
        },
        async getStayById({commit}, {stayId}) {
            try {
                var stay = await stayService.getStayById(stayId)
                return stay

            } catch {
                console.log('Had Error getting stay by id in store', err)
                throw err;
            }
        }
    }
}