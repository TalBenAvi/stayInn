
import {stayService } from "../services/stay.service.js"

export const stayStore = {
    state: {
        stays: [],
        filterBy: ''
    },
    getters: {
        stays(state) {return state.stays},
        
        staysForDisplay(state) {
            let stays =  JSON.parse(JSON.stringify(state.stays))
            if (!state.filterBy) return state.stays

            let filteredStays = []
            filteredStays = stays.filter((stay) => stay.loc.country.toLowerCase() === state.filterBy)

            return filteredStays

            
        }

    },
    mutations: {
        setStays(state,{stays}) {
            state.stays = stays
        },
         setStay(state,{stays}) {
            state.stay = stays.find(stay=>stay.id===stayId)
        },
        setFilter(state,{filterBy}) {
            state.filterBy = filterBy
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
        },
        setCurrFilter({commit}, {filterBy}) {
            console.log(filterBy, 'from store')
            commit({type:'setFilter', filterBy})
        }
        // async setCurrFilter({commit}, {stayCity}) {
        //     console.log("stay store:", stayCity)
        //     try {
        //         var city = await stayService.setCurrFilter(stayCity)
        //         return city

        //     } catch {
        //         console.log('Had Error getting city in store', err)
        //         throw err;
        //     }
        // }
    }
}