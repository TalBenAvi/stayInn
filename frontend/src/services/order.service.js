import { httpService} from "./http.service.js";
import {storageService} from './async-storage.service.js'
import {userService} from './user.service.js'
import { utilService } from "./utils.service.js";

export const orderService= {
    add,
    query,
    remove,
}

function query(filterBy) {
    // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    // return httpService.get(`review${queryStr}`)
    return storageService.query('order')
  }
  
  function remove(orderId) {
    // return httpService.delete(`review/${reviewId}`)
    return storageService.delete('order', orderId)
  
  }
  async function add(order) {
    // const addedReview = await httpService.post(`review`, review)
    const user = userService.getLoggedinUser()
    order.buyer.fullname = user.fullname
    order.buyer._id = user._id
    // order.host = await userService.getById(order.user._id)
    const addedOrder = await storageService.post('order', order)
    console.log(addedOrder)
  
    return addedOrder
  }
  
  // This IIFE functions for Dev purposes 
  // It allows testing of real time updates (such as sockets) by listening to storage events
//   (async () => {
//     var reviews = await storageService.query('review')
  
//     // Dev Helper: Listens to when localStorage changes in OTHER browser
//     window.addEventListener('storage', async () => {
//       console.log('Storage updated');
//       const freshReviews = await storageService.query('review')
//       if (freshReviews.length === reviews.length + 1 ){
//         console.log('Review Added - localStorage updated from another browser')
//         socketService.emit(SOCKET_EVENT_REVIEW_ADDED, freshReviews[freshReviews.length-1])
//       }
//       reviews = freshReviews
//     });
//   })()
  
  