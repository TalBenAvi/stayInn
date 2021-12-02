
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
        stays.push(_createStay("10016546","Sunflower House",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10006566","Carapathian Log Home",'CLH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10306576","Shuhe Arcade Ancient Town",'SAT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10706536","Stylish Trullo with pool & terrace",'STP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10602146","Tiny house Zhorec nearby Bezdružic",'THZ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10034546","Nuit insolite sous les étoiles",'NISSLE',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10023546","Apartma Zemljanka - Earth House",'AP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("101012546","Schneekarhuette - Tower Suite",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10012546","Ribeira Charming Duplex",'IHJT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("100045546","Ribeira Charming Duplex",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay(id,name,initials,imgUrls) {
    return {
        id,
        name,
        initials,
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