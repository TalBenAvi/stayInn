
import { storageService } from "./async-storage.service.js";
import { utilService } from "./utils.service.js";
const STAY_KEY = 'staysDB'
_createStays()

export const stayService = {
    query,
    getStayById
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

async function getStayById(stayId) {
    try {
        console.log(stayId)
        var stay = await storageService.get(STAY_KEY, stayId);
        console.log(stay)
        return stay
    } catch (err) {
        console.log('Had an error getting stay by id (in front-service)', err)
        throw err;
    }
}


function _createStays() {
    let stays = utilService.loadFromStorage(STAY_KEY);
    if (!stays || !stays.length) {
        stays = [];
        stays.push(_createStay("10016546","El Port de la Selva",['imgs/4.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg','imgs/6.jpg']));
        stays.push(_createStay("10006566","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10306576","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10706536","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10602146","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10034546","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10023546","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("101012546","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("10012546","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        stays.push(_createStay("100045546","Ribeira Charming Duplex",['imgs/4.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg']));
        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay(id,name,imgUrls) {
    return {
        id,
        name,
        imgUrls,
        price: 80.00,
        summary: "Fantastic duplex apartment with three bedrooms, located in...",
        propertyType: 'House',
        TypeOfPlace: 'Entire Place',
        HouseRules: ['Pets Allowed', 'Children Allowed'],
        accommodates: 8,
        beds: 1,
        bedrooms: 2,
        bath: 1,
        amenities: ['TV', 'Wifi'],
        host: {
            _id: '51399391',
            fullName: 'Davit Pok',
            imgUrl: 'https://x.com/pic.jpg',
        },
        loc: {
            country: 'Portugal',
            countryCode: 'PT',
            address: 'Catalonia',
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