
import {stayService } from "../services/stay.service.js"

export const stayStore = {
    state: {
        stays: [],
        filterBy: ''
    },
    getters: {
        stays(state) {return state.stays},
        staysForDisplay(state) {
            console.log(state.filterBy)
            let stays =  JSON.parse(JSON.stringify(state.stays))
            if (!state.filterBy.amenities.length && !state.filterBy.location && !state.filterBy.typeOfPlace.length && !state.filterBy.price.minPrice && !state.filterBy.price.maxPrice &&!state.filterBy.beds && state.filterBy.bath && state.filterBy.bedrooms && !state.filterBy.propertyType.length && !state.filterBy.HouseRules.length) return state.stays

            if (state.filterBy.location) {
                stays = stays.filter((stay) => stay.loc.country.toLowerCase() === state.filterBy.location)
            }

            if (state.filterBy.amenities.length) {
                stays = stays.filter(stay => state.filterBy.amenities.every(amenitie => stay.amenities.includes(amenitie)))
            }

            if (state.filterBy.typeOfPlace.length) {
                stays = stays.filter(stay => state.filterBy.typeOfPlace.some(type => stay.typeOfPlace.includes(type)))
            }

            if(state.filterBy.price.minPrice) {
                stays = stays.filter(stay => {
                    return stay.price >= state.filterBy.price.minPrice && stay.price <= state.filterBy.price.maxPrice
                })
            }

            if(state.filterBy.beds) {
                stays = stays.filter(stay => {
                    return stay.beds >= state.filterBy.beds
                })
            }
            if(state.filterBy.bath) {
                stays = stays.filter(stay => {
                    return stay.bath >= state.filterBy.bath
                })
            }

            if(state.filterBy.bedrooms) {
                stays = stays.filter(stay => {
                    return stay.bedrooms >= state.filterBy.bedrooms
                })
            }

            if (state.filterBy.propertyType.length) {
                stays = stays.filter(stay => state.filterBy.propertyType.some(property => stay.propertyType.includes(property)))
            }


            if (state.filterBy.HouseRules.length) {
                stays = stays.filter(stay => state.filterBy.HouseRules.some(rule => stay.HouseRules.includes(rule)))
            }


            return stays
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