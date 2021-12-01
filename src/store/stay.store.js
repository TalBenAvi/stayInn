
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
        }
    },
    actions: {
        async loadStays({commit}) {
            try  {
                console.log('im here')
                var stays = await stayService.query()
                console.log(stays)
                commit({type:'setStays', stays})
            } catch(err) {
                console.log('had trouble retriving from query in store:' , err)
                throw err;
            }
        }
    }
}