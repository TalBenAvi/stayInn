
import { storageService } from "./async-storage.service.js";
import { utilService } from "./utils.service.js";
const STAY_KEY = 'staysDB'
_createStays()

export const stayService = {
    query
}

async function query() {
    try {
        var stays = await storageService.query(STAY_KEY)
        return stays
    } catch (err) {
        console.log('had trouble loading stays :', err)
        throw err;
    }
}

function  _createStays() {
    let stays = utilService.loadFromStorage(STAY_KEY);
    if (!stays || !stays.length) {
        stays = [];
        stays.push(_createStay());
        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay() {
    return {
        _id: "10006546",
        name: "Ribeira Charming Duplex",
        imgUrls: ['./imgs/1.jpg','./imgs/2.jpg','./imgs/3.jpg','./imgs/4.jpg','./imgs/5.jpg' ],
        price: 80.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in...",
        propertyType: 'House',
        TypeOfPlace: 'Entire Place',
        HouseRules: ['Pets Allowed', 'Children Allowed'],
        accommodates: 8,
        beds: 1,
        bedrooms: 2,
        bath: 1,
        amenities: ['TV', 'Wifi'],
        host: {
            _id: '51399391',
            fullName: 'Davit Pok',
            imgUrl: 'https://x.com/pic.jpg',
        },
        loc: {
            country: 'Portugal',
            countryCode: 'PT',
            address: 'Porto, Portugal',
            lat: -8.61308,
            lng: 41.1413
        },
        reviews: [ //*all reviews are pushed here
            {
            id: 'madeId',
            txt: 'Very helpful hosts. Cooked traditional...',
            rate: 4,
            by: {
                _id: 'u102',
                fullName: 'user2',
                imgUrl: '/img/img2.jpg'
            }
        }
    ]

}


}