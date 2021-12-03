
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
        //miscellaneous
        stays.push(_createStay("10016546","Sunflower House",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10006566","Carapathian Log Home",'CLH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10306576","Shuhe Arcade Ancient Town",'SAT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10706536","Stylish Trullo with pool & terrace",'STP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10602146","Tiny house Zhorec nearby Bezdružic",'THZ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10034546","Nuit insolite sous les étoiles",'NISSLE',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10023546","Apartma Zemljanka - Earth House",'AP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("101012546","Schneekarhuette - Tower Suite",'STS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("10012546","Invisible House Joshua Tree - Skyscraper with Pool",'IHJT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("110045546","Cabane Drommen - L'Arbre à Cabane",'CD',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("104045546","La Réserve de l'Aube - Hébergement Insolite Design",'LRDI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("100645546","Amazing view of fjord & mountains glamping Birdbox",'AVOF',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
        stays.push(_createStay("170045546","Kalle's Inn Glassshouses",'KLG',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg']));
      

        //PARIS
        stays.push(_createStay("16716546","Beautiful and bright studio in belleville",'BABS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16717546","LOUVRE 1: UPPER CLASS SUITE - RUE SAINT HONORE",'LUC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16217646","Cosy one bedroom near Grand Boulevards",'COB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219646","Truly parisien apartment in St Germain des Prés",'TPA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219346","Cute apartment by the Musée d'Orsay",'CAB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219246","Magnificent flat 1BR/3P - Marais/Republic",'MFB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16319346","Bright & cozy 1 bedroom 4p near Canal St Martin",'BCB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));

         //LISBON
         stays.push(_createStay("14435345","Story Flat Lisbon - Alfama",'SFL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("12348790","Alfama - Historic Center",'AHC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("12368900","Stylish 1BR apt in Lisbon Downtown* Baixa",'SAL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("44568907","Chiado Loft 17 Charm Boutique Apartment",'CLC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("23426887","Remodeled Historic Apartment in Bairro Alto",'RHA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("12325466","Lisbon Baronesa Historic Center Apartaments",'LBH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
         stays.push(_createStay("55566878","Apartment in the heart of Lisbon",'AIT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','PT',38.736946, -9.142685));
       
        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay(id,name,initials,imgUrls,country='Germany',countryCode='GR',lat=11,lng=-12) {
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
            country,
            countryCode,
            address: 'Catalonia',
            lat,
            lng
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