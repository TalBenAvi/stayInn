
export const tripStore = {
    state: {
        trip: {
            startDate: "",
            endDate: "",
            guests: {
                adults: 0,
                children: 0,
                infants: 0,
                pets: 0
            },
            dest: {
                country:"",
                countryCode: "",
                address: ""
            }
        }
    },
    getters: {
        currentTrip(state) {
            return state.trip
        }
    },
    mutations: {
        setCurrTrip(state, {trip}) {
            state.trip = trip
        }
    },
    actions: {
        updateTrip({commit}, {trip}) {
            commit({type: 'setCurrTrip', trip})
        }

    }

    
}