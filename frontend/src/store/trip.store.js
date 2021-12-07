
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
        },
        emptytrip: {
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
        },
        emptytrip(state) {
            return state.emptytrip
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