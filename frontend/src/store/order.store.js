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
              price: ''
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
        }
    }
    
}