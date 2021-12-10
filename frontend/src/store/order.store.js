import { orderService } from "../services/order.service.js"

export const orderStore = {
    state: {
        orders:[],
        emptyOrder : {
            
            hostId: "",
            createdAt: Date.now(),
            buyer: {
              _id: '',
              fullname: ''
            },
            totalPrice:'',
            startDate: "",
            endDate: "",
            guests: {
              adults: 0,
              children: 0,
              infants: 0,
              pets:0
            },
            stay: {
              _id: "",
              name: "",
              price: '',
              imgSrc: '',
              initials: '',
              country: ''
            },
            status: "pending"
        }
    },
    getters: {
        orders(state) {return state.orders},
        emptyOrder(state) {
            return state.emptyOrder
        }
    },
    mutations: {
        setOrders(state,{orders}) {
            state.orders = orders
        },
        addOrder(state,{order}) {
            state.orders.push(order)
        }
    },
    actions: {
        async addOrder(context, {order}) {
            try {
                order = await orderService.add(order)
                console.log(order)
                context.commit({type:'addOrder', order})
                return order;
            } catch (err) {
                console.log('orderStore: error with adding an order', order)
                throw err;
            }
        },
        async loadOrders(context) {
            try {
                const orders = await orderService.query()
                
                context.commit({type:'setOrders', orders})
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },
        async getUserOrders({commit}, {userId}) { 
            try {
                const orders = await orderService.query()
                console.log(orders)

                var userOrders = orders.filter(order => { 
                    console.log(order.buyer._id, userId) 
                    return order.buyer._id === userId})

                return userOrders
            } catch (err) {
                console.log('had trouble getting user orders from store', err)
            }
            
        },
        async getHostOrders({commit}, {hostId}) {

            try {
                console.log(hostId)
                const orders = await orderService.query() 
                var hostOrders = orders.filter(order => {
                    return order.hostId === hostId})
                console.log(hostOrders)
                return orders
                
            } catch (err) {
                console.log('had trouble getting host orders from store', err)


            }
        }
    }
    
}