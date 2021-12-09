
import { getStayByHostId } from "../../../backend/api/stay/stay.controller.js"
import {stayService } from "../services/stay.service.js"

export const stayStore = {
    state: {
        stays: [],
        filterBy: '',
        filterByTrip: ''
    },
    getters: {
        stays(state) {return state.stays},
        staysForDisplay(state) {

            let stays =  JSON.parse(JSON.stringify(state.stays))

            if (!state.filterBy && !state.filterByTrip) return stays

            if (!state.filterByTrip && !state.filterBy.amenities.length && !state.filterBy.location && !state.filterBy.typeOfPlace.length && !state.filterBy.price.minPrice && !state.filterBy.price.maxPrice &&!state.filterBy.beds && state.filterBy.bath && state.filterBy.bedrooms && !state.filterBy.propertyType.length && !state.filterBy.HouseRules.length && !state.filterByTrip ) return state.stays

            if (state.filterBy) {
                   

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
            }

          
            if(state.filterByTrip) {
                let accommodates = state.filterByTrip.guests.adults + state.filterByTrip.guests.children + state.filterByTrip.guests.infants
                stays = stays.filter(stay => {
                    return stay.accommodates >= accommodates && stay.loc.countryCode === state.filterByTrip.dest.countryCode
                    
                    
                })
            }
            
            return stays
        }

    },
    mutations: {
        setStays(state,{stays}) {
            state.stays = stays
        },
        //  setStay(state,{stays}) {
        //     state.stay = stays.find(stay=>stay.id===stayId)
        // },
        updateStay(state,{stay}){
            const idx = state.stays.findIndex(s=>s._id===stay.id) 
            state.stays.splice(idx,1,stay);
        },
        setFilter(state,{filterBy}) {
            state.filterBy = filterBy
        },
        setFilterByTrip(state,{trip}) {
            state.filterByTrip = trip
        }
    },
    actions: {
    async addReview({ commit }, { review}) {
            console.log(review);
            try {
                const updatedStay = await stayService.addReview(review);
                console.log(updatedStay);
                commit
            } catch (err) {
                console.log('stayStore: Error in adding review', err)
                throw err
            }
        },
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
                console.log(stay);
                return stay

            } catch {
                console.log('Had Error getting stay by id in store', err)
                throw err;
            }
        },
        async getStayByHostId({commit}, {hostId}) {
            try {
                // var stay = await stayService.getStayByHost(hostId)
                console.log(stay)
                return stay

            } catch {
                console.log('Had Error getting stay by host in store', err)
                throw err;
            }

        },
        setCurrFilter({commit}, {filterBy}) {
            commit({type:'setFilter', filterBy})
        },
        setFilterByTrip({commit}, {trip}) {
            commit({type:'setFilterByTrip', trip})
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