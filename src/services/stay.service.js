
import { storageService } from "./async-storage.service.js";
import { utilService } from "./utils.service.js";
const STAY_KEY = 'staysDB'
_createStays()

export const stayService = {
    query,
    getStayById,
    // setCurrFilter
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

// async function setCurrFilter(city) {
//     try {
//         console.log(city)
//         var city = await storageService.get(STAY_KEY, city);
//         console.log(stay)
//         return stay
//     } catch (err) {
//         console.log('Had an error getting stay by id (in front-service)', err)
//         throw err;
//     }
// }


function _createStays() {
    let stays = utilService.loadFromStorage(STAY_KEY);
    if (!stays || !stays.length) {
        stays = [];
        //miscellaneous
        stays.push(_createStay("10016546","Sunflower House",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
        stays.push(_createStay("10006566","Carapathian Log Home",'CLH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Romania','RM','Predeluț, Județul Brașov',46.568825,26.916025,'Carpathian Log Home is a complex of two identical wooden villas settled on a 2 acres property filled with apple trees, meadows and so close to the forest! Carpathian Log Home is situated on the outskirts of the forest, near the legendary Bran Castle. This villa is a five bedrooms with ensuite bathrooms, amazing high ceiling livingroom with fireplace and glass wall facing the mountains, gourmet kitchen, sauna & jacuzzi, amazing surrounding nature:- this is your perfect holiday home in Romania. The space Carpathian Log Home2 will comfortably accommodate 10 people in the 5 double bedrooms, with space for 4 extra persons on the sleeping sofas in the livingroom.',['Wifi','Kitchen','Washer','Free parking','Dedicated workspace','Iron'],'Entire chalet','Emanuela',12,5,7,5,355,['No Smoking', 'Pets are allowed','No parties or events'],'House','We had a great time in Emanuela’s villa. The communication was great and everything went smoothly. Would definitely recommend! Thank you!!!',4.9));
        stays.push(_createStay("10306576","Shuhe Arcade Ancient Town",'SAT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Yunnan','CH','Lijiang, Yunnan',26.8565,100.2271,'The guesthouse has a variety of exquisite rooms with digital TV, private WiFi, private bathrooms in each room, 24 hours hot water, and premium disposable toiletries.All rooms are equipped with hot and cold air-conditioning for your comfort and convenience. The inn provides additional tourist directions, and Puer tea is free to enjoy. Looking forward to meeting you.The space The third floor of the guest house has a sky realm and bohemian terrace, which is the highest view point nearby. The surrounding is unobstructed and overlooks the ancient town. The terrace on the second floor is equipped with a barbecue, so you can gather for dinner and drinks.There is a garden, a fish pond, a tea room, a mahogany machine, a mahogany machine, and a mahogany machine on the ground floor for feeding fish, drinking tea, and playing mahogany.The guest house is built on a hill, so you can enjoy the quietness while still enjoying the convenience of the surrounding area and the traffic. Hope to meet you.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Private room','博',2,1,1,1,27,['Smoking allowed', 'Pets allowed','Check-in: Flexible'],'Villa','No reviews (yet)',0));
        stays.push(_createStay("10706536","Stylish Trullo with pool & terrace",'STP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Italy','IT','Ostuni, Apúlia',40.7295,7.5780,'The "Trullo" is an Rural local abitation. Will allow you to spend a romantic stay in this building feature Pugliese. The Trullo is completely independent and inside there is a bathroom, a kitchenette and an outdoor area is completed with table and chairs.The pool is shared with only 2 other apartments in the same building: Lamia and Modern Apartment (visible in my other listings here on airbnb)',['Wifi','Kitchen','Free parking','Pool'],'Trullo','Angelo',2,1,1,1,60,['Pets allowed','Check-in: 4:00 PM - 12:00 AM','Checkout: 11:00 AM'],'Trullo','Great location, great place and the hosts were so kind and helpful. Definitely recommend.',4.54));
        stays.push(_createStay("10602146","Tiny house Zhorec nearby Bezdružic",'THZ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Czechia','CZ','Bezdružice, Plzeňský kraj',49.9067,12.9713,'Come to enjoy non-traditional accommodation in the former military tiny house in Zhorec near Bezdruzice in our garden surrounded by meadows and forests. This simple accommodation with a base equipped kitchen, outdoor toilet and shower, which is a supplement but separate to our existing accommodation in the cottage. Possibility of barbecue and relaxation, privacy guaranteed :) We have the electricity and possibility to heat it up. Appreciated by adventurers and enthusiasts for romance in nature.The space Simple equipment, kitchenette, electricity, the possibility of using outdoor areas and a fireplace',['Kitchen','Dedicated workspace','Pool'],'Camper/RV','Gabriela',2,1,1,1,40,['No Smoking', 'No pets','No parties or events'],'Camper/RV','A beautiful place to relax and just enjoy the mesmerizing countryside :)',4.86));
        stays.push(_createStay("10034546","Nuit insolite sous les étoiles",'NISSLE',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Belgium','BG','Aye, Wallonie',50.2249,5.2970,'Nestled in the heart of the Famenne, our dome welcomes you in a setting of greenery and flowers.Caroline, Christophe and their tribe of girls prepare this cocoon with love for you to spend a moment out of time : disconnect from everyday life, slow down for a night and reconnect with nature and the stars.Wake up with the first rays of the sun, the birds singing and the smell of flowers.Local breakfast, organic and optional house, as well as evening meals.',['Free parking'],'Dome house','Caroline',2,1,1,1,125,['No Smoking', 'No pets','No parties or events'],'Dome house','We spent a warm night surrounded by lots of little attention which we really enjoy. My partner and I highly recommend',5.0));
        stays.push(_createStay("10023546","Apartma Zemljanka - Earth House",'AP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Slovenia','SL','Ljutomer',46.5194,16.1978,'With a tiring life-rhythm, constant worries, always new burdens and obligations, there is always a need to find time for REST and RELAXATION. Outside the citys hustle and bustle, in the middle of a beautiful landscape in Razkrižje, there is a modern EARTH- / HOBIT HOUSE, that impresses every guest. It is entirely built of natural materials (CLAY, WOOD, ...). Love for creativity and nature can be felt at every step. The evidences are handcrafted "masterpieces" in the earth and around it.The space Surrounding ecological plantations of apples and blueberries also give a special note to the earth house. In the Razkrižje "oasis" of peace even those who love the noble drop will not be disappointed. In the evenings you can enjoy the selected home-made wine on the terrace, with a view of the surrounding area.In the surrounding areas, you will also be able to find various water activities, since the Apartment Zemljanka is near Therme Sveti Martin na Muri (Croatia), Terme Banovci, Terme Lendava and Bioterme Mala Nedelja.This way you can charge your batteries and get new élan for carrying out your everyday tasks!',['Wifi','Kitchen','TV','Free parking'],'Entire rental unit','Mirko',4,1,2,1,78,['No Smoking', 'No pets','No parties or events'],'Rental unit','Very fascinating house and definitely worth seeing.Everything available that you need and extremely nice and caring hosts.',4.98));
        stays.push(_createStay("101012546","Schneekarhuette - Tower Suite",'STS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Austria','AU','Mayrhofen, Tirol',47.1605,11.8597,'The Schneekarhütte is located on a, if not the most beautiful,viewing plateau at the top of the ski area. The outstanding pyramid construction was designed bythe focus is on organic, sustainable foods- if possible from our own farm.Since 2012, there are 10 unique suites to choosefrom. To be the first on the slopes in the morning before everyoneelse comes up - this is only available here.',['Wifi','Kitchen','TV','Free parking','Dedicated workspace'],'Private room in hut','Marie-Luise',2,1,1,1,563,['No Smoking'],'Private room','No reviews (yet)',0));
        stays.push(_createStay("10012546","Invisible House Joshua Tree - Skyscraper with Pool",'IHJT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Usa','US','Joshua Tree, California',34.1347,116.3131,'Quite simply, Invisible House is the most spectacular house in Joshua Tree. As seen in design and lifestyle publications worldwide, this mirrored 22 story horizontal skyscraper virtually disappears into the vast desert landscape. The luxurious 100-foot indoor swimming pool contrasts with the High Desert surroundings. The 90 acre property has its own 4000ft mountain and shares half a mile border with the National Park.The word unique is insufficient. Welcome to Invisible House.',['Wifi','TV','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Foxden Hospitality',8,4,4,5,3679,['No Smoking', 'No pets'],'Residential home','Fabulous house in a fabulous location! Really fun weekend! :)',4.82));
        stays.push(_createStay("110045546","Cabane Drommen - L'Arbre à Cabane",'CD',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
        stays.push(_createStay("104045546","La Réserve de l'Aube - Hébergement Insolite Design",'LRDI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
        stays.push(_createStay("100645546","Amazing view of fjord & mountains glamping Birdbox",'AVOF',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
        stays.push(_createStay("170045546","Kalle's Inn Glassshouses",'KLG',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire residential home','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
      
        //PARIS
        stays.push(_createStay("16716546","Beautiful and bright studio in belleville",'BABS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16717546","LOUVRE 1: UPPER CLASS SUITE - RUE SAINT HONORE",'LUC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16217646","Cosy one bedroom near Grand Boulevards",'COB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219646","Truly parisien apartment in St Germain des Prés",'TPA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219346","Cute apartment by the Musée d'Orsay",'CAB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16219246","Magnificent flat 1BR/3P - Marais/Republic",'MFB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));
        stays.push(_createStay("16319346","Bright & cozy 1 bedroom 4p near Canal St Martin",'BCB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR',48.864716,2.349014));

         //LISBON
         stays.push(_createStay("14435345","Story Flat Lisbon - Alfama",'SFL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("12348790","Alfama - Historic Center",'AHC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("12368900","Stylish 1BR apt in Lisbon Downtown* Baixa",'SAL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("44568907","Chiado Loft 17 Charm Boutique Apartment",'CLC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("23426887","Remodeled Historic Apartment in Bairro Alto",'RHA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("12325466","Lisbon Baronesa Historic Center Apartaments",'LBH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
         stays.push(_createStay("55566878","Apartment in the heart of Lisbon",'AIT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB',38.736946, -9.142685));
       
        //LONDON
        stays.push(_createStay("1A4156JF","Stunning Mews House in South Kensington",'SMH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        // stays.push(_createStay("1A4159BA","Lovely studio in Earls Court!",'LSI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        stays.push(_createStay("1A5859CA","Unique & Welcoming 2BD Flat in Limehouse",'UWF',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        stays.push(_createStay("1B4959CB","Stay&Co Classic Studio Apartment",'SCC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        stays.push(_createStay("1449594F","Spacious and Quiet Studio near Kings Cross Station",'SAQ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        stays.push(_createStay("1499554D","A pocket full of pearls in the heart of London",'PFO',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));
        stays.push(_createStay("14F95B4A","Stunning Shoreditch Loft Conversion + Movie Screen",'SSL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND',51.509865,-0.118092));

        //AMSTERDAM
        stays.push(_createStay("29B83CA5","Luxury, Design, Garden, Vondelpark & Free Bikes!",'LDG',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("29A83DA6","Amsterdam Special Watervilla",'ASW',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("27A84DA6","Design house with wellness & sauna",'DHW',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("29863CA6","Central & Modern Eco-houseboat at the IJ water",'CME',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("2983BA67","Great Houseboat in Amsterdam Centrum",'GHI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("2943FA68","Amazing houseboat in Amsterdam city center",'AHI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));
        stays.push(_createStay("2589BG27","New Appt: Perfect for family in great location",'NAP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS',52.377956,4.897070));

        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay(id,name,initials,imgUrls,country='Germany',countryCode='GR',address='Berlin',lat=51.1657,lng=10.4515,summary='Bright and beautiful top-floor studio with large balcony.One large, bright room with a kitchen area, large dining table and comfortable couch/bed with futon mattress.',amenities=['Wifi','Kitchen','Air conditioning','Washer','Free parking','Dryer','Dedicated workspace','Iron','Gym','Pool']
, TypeOfPlace='Entire Place', fullName='Jhon Lennon', accommodates=14, bedrooms=2, beds=2, bath=2, price=255,HouseRules=['Pets Allowed', 'Children Allowed','No Smoking'],propertyType='House',txt='Very helpful hosts. Cooked traditional...',rate=4.5) {
    return {
        id,
        name,
        initials,
        imgUrls,
        price,
        summary,
        propertyType,
        TypeOfPlace,
        HouseRules,
        accommodates,
        beds,
        bedrooms,
        bath,
        amenities,
        host: {
            _id: '51399391',
            fullName,
            imgUrl: 'https://x.com/pic.jpg',
        },
        loc: {
            country,
            countryCode,
            address,
            lat,
            lng,
            position: { lat, lng }
        },
        reviews: [ //*all reviews are pushed here
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u102',
                    fullName: 'Erin',
                    imgUrl: '/img/img2.jpg'
                }
            },
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u103',
                    fullName: 'Kiersta',
                    imgUrl: '/img/img2.jpg'
                }
            },
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u104',
                    fullName: 'Ludovic',
                    imgUrl: '/img/img2.jpg'
                }
            },
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u105',
                    fullName: 'Emile',
                    imgUrl: '/img/img2.jpg'
                }
            }
            ,
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u104',
                    fullName: 'Maria',
                    imgUrl: '/img/img2.jpg'
                }
            },
            {
                id: 'madeId',
                txt,
                rate,
                by: {
                    _id: 'u105',
                    fullName: 'Konstantin',
                    imgUrl: '/img/img2.jpg'
                }
            }
        ]

    }


}