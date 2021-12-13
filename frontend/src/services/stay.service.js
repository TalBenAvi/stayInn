
// import { storageService } from "./async-storage.service.js";
import { utilService } from "./utils.service.js";
import {httpService} from "./http.service.js"
const STAY_KEY = 'staysDB'
_createStays()

const STAY_URL = '/stay';

export const stayService = {
    query,
    getStayById,
    // getStayByHost
    // setCurrFilter
    addReview,
}

async function query() {
    try {
        // var stays = await storageService.query(STAY_KEY)
        var stays = await httpService.get(STAY_URL)
        return stays
    } catch (err) {
        console.log('had trouble loading stays :', err)
        throw err;
    }
}

async function getStayById(stayId) {

    try {
        var stay = await httpService.get(`/stay/${stayId}`)
        console.log(stay);
        return stay
    }   catch (err) {
        console.log('Had an error getting stay by id (in front-service)', err)
        throw err;
    }
}
async function addReview(review) {
    console.log(review);
    try {
        var stay = await httpService.post(`/stay/review/${review.stayId}`,review)
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
        stays.push(_createStay("10016546","Sunflower House",'SH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Spain','SP','El Port de la Selva, Catalonia',40.416775,-3.703790,'Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.The space The house has been featured in the New York Times and in Wallpaper.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire place','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Villa','A magnific house with a perfect view. We had a great time at this place. Recommend for family with children',4.8));
        stays.push(_createStay("10006566","Carapathian Log Home",'CLH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Romania','RM','Predeluț, Județul Brașov',46.568825,26.916025,'Carpathian Log Home is a complex of two identical wooden villas settled on a 2 acres property filled with apple trees, meadows and so close to the forest! Carpathian Log Home is situated on the outskirts of the forest, near the legendary Bran Castle. This villa is a five bedrooms with ensuite bathrooms, amazing high ceiling livingroom with fireplace and glass wall facing the mountains, gourmet kitchen, sauna & jacuzzi, amazing surrounding nature:- this is your perfect holiday home in Romania. The space Carpathian Log Home2 will comfortably accommodate 10 people in the 5 double bedrooms, with space for 4 extra persons on the sleeping sofas in the livingroom.',['Wifi','Kitchen','Washer','Free parking','Dedicated workspace','Iron'],'Entire place','Emanuela',12,5,7,5,355,['No Smoking', 'Pets are allowed','No parties or events'],'House','We had a great time in Emanuela’s villa. The communication was great and everything went smoothly. Would definitely recommend! Thank you!!!',4.9));
        stays.push(_createStay("10306576","Shuhe Arcade Ancient Town",'SAT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Yunnan','CH','Lijiang, Yunnan',26.8565,100.2271,'The guesthouse has a variety of exquisite rooms with digital TV, private WiFi, private bathrooms in each room, 24 hours hot water, and premium disposable toiletries.All rooms are equipped with hot and cold air-conditioning for your comfort and convenience. The inn provides additional tourist directions, and Puer tea is free to enjoy. Looking forward to meeting you.The space The third floor of the guest house has a sky realm and bohemian terrace, which is the highest view point nearby. The surrounding is unobstructed and overlooks the ancient town. The terrace on the second floor is equipped with a barbecue, so you can gather for dinner and drinks.There is a garden, a fish pond, a tea room, a mahogany machine, a mahogany machine, and a mahogany machine on the ground floor for feeding fish, drinking tea, and playing mahogany.The guest house is built on a hill, so you can enjoy the quietness while still enjoying the convenience of the surrounding area and the traffic. Hope to meet you.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Private room','博',2,1,1,1,27,['Smoking allowed', 'Pets allowed','Check-in: Flexible'],'Villa','No reviews (yet)',0));
        stays.push(_createStay("10706536","Stylish Trullo with pool & terrace",'STP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Italy','IT','Ostuni, Apúlia',40.7295,7.5780,'The "Trullo" is an Rural local abitation. Will allow you to spend a romantic stay in this building feature Pugliese. The Trullo is completely independent and inside there is a bathroom, a kitchenette and an outdoor area is completed with table and chairs.The pool is shared with only 2 other apartments in the same building: Lamia and Modern Apartment (visible in my other listings here on airbnb)',['Wifi','Kitchen','Free parking','Pool'],'Trullo','Angelo',2,1,1,1,60,['Pets allowed','Check-in: 4:00 PM - 12:00 AM','Checkout: 11:00 AM'],'Trullo','Great location, great place and the hosts were so kind and helpful. Definitely recommend.',4.54));
        stays.push(_createStay("10602146","Tiny house Zhorec nearby Bezdružic",'THZ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Czechia','CZ','Bezdružice, Plzeňský kraj',49.9067,12.9713,'Come to enjoy non-traditional accommodation in the former military tiny house in Zhorec near Bezdruzice in our garden surrounded by meadows and forests. This simple accommodation with a base equipped kitchen, outdoor toilet and shower, which is a supplement but separate to our existing accommodation in the cottage. Possibility of barbecue and relaxation, privacy guaranteed :) We have the electricity and possibility to heat it up. Appreciated by adventurers and enthusiasts for romance in nature.The space Simple equipment, kitchenette, electricity, the possibility of using outdoor areas and a fireplace',['Kitchen','Dedicated workspace','Pool'],'Camper/RV','Gabriela',2,1,1,1,40,['No Smoking', 'No pets','No parties or events'],'Entire place','A beautiful place to relax and just enjoy the mesmerizing countryside :)',4.86));
        stays.push(_createStay("10034546","Nuit insolite sous les étoiles",'NISSLE',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Belgium','BG','Aye, Wallonie',50.2249,5.2970,'Nestled in the heart of the Famenne, our dome welcomes you in a setting of greenery and flowers.Caroline, Christophe and their tribe of girls prepare this cocoon with love for you to spend a moment out of time : disconnect from everyday life, slow down for a night and reconnect with nature and the stars.Wake up with the first rays of the sun, the birds singing and the smell of flowers.Local breakfast, organic and optional house, as well as evening meals.',['Free parking'],'Dome house','Caroline',2,1,1,1,125,['No Smoking', 'No pets','No parties or events'],'Dome house','We spent a warm night surrounded by lots of little attention which we really enjoy. My partner and I highly recommend',5.0));
        stays.push(_createStay("10023546","Apartma Zemljanka - Earth House",'AP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Slovenia','SL','Ljutomer',46.5194,16.1978,'With a tiring life-rhythm, constant worries, always new burdens and obligations, there is always a need to find time for REST and RELAXATION. Outside the citys hustle and bustle, in the middle of a beautiful landscape in Razkrižje, there is a modern EARTH- / HOBIT HOUSE, that impresses every guest. It is entirely built of natural materials (CLAY, WOOD, ...). Love for creativity and nature can be felt at every step. The evidences are handcrafted "masterpieces" in the earth and around it.The space Surrounding ecological plantations of apples and blueberries also give a special note to the earth house. In the Razkrižje "oasis" of peace even those who love the noble drop will not be disappointed. In the evenings you can enjoy the selected home-made wine on the terrace, with a view of the surrounding area.In the surrounding areas, you will also be able to find various water activities, since the Apartment Zemljanka is near Therme Sveti Martin na Muri (Croatia), Terme Banovci, Terme Lendava and Bioterme Mala Nedelja.This way you can charge your batteries and get new élan for carrying out your everyday tasks!',['Wifi','Kitchen','TV','Free parking'],'Entire place','Mirko',4,1,2,1,78,['No Smoking', 'No pets','No parties or events'],'Rental unit','Very fascinating house and definitely worth seeing.Everything available that you need and extremely nice and caring hosts.',4.98));
        stays.push(_createStay("101012546","Schneekarhuette - Tower Suite",'STS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Austria','AU','Mayrhofen, Tirol',47.1605,11.8597,'The Schneekarhütte is located on a, if not the most beautiful,viewing plateau at the top of the ski area. The outstanding pyramid construction was designed bythe focus is on organic, sustainable foods- if possible from our own farm.Since 2012, there are 10 unique suites to choosefrom. To be the first on the slopes in the morning before everyoneelse comes up - this is only available here.',['Wifi','Kitchen','TV','Free parking','Dedicated workspace'],'Private room in hut','Marie-Luise',2,1,1,1,563,['No Smoking'],'Private room','No reviews (yet)',0));
        stays.push(_createStay("10012546","Invisible House Joshua Tree - Skyscraper with Pool",'IHJT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Usa','US','Joshua Tree, California',34.1347,116.3131,'Quite simply, Invisible House is the most spectacular house in Joshua Tree. As seen in design and lifestyle publications worldwide, this mirrored 22 story horizontal skyscraper virtually disappears into the vast desert landscape. The luxurious 100-foot indoor swimming pool contrasts with the High Desert surroundings. The 90 acre property has its own 4000ft mountain and shares half a mile border with the National Park.The word unique is insufficient. Welcome to Invisible House.',['Wifi','TV','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire place','Foxden Hospitality',8,4,4,5,949,['No Smoking', 'No pets'],'Residential home','Fabulous house in a fabulous location! Really fun weekend! :)',4.82));
        stays.push(_createStay("110045546","Cabane Drommen - L'Arbre à Cabane",'CD',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'France','FR','Guyonvelle, Grand Est',34.1347,116.3131,'Discover the magical world of the Drommen hut, unique in France. With 4 levels :the living room, then the toilet, then the bedroom.Guests can dine on the perched terrace.',['Free parking'],'Treehouse','Jean-Marie',2,1,1,0,89,['No Smoking', 'No pets','No parties or events'],'Treehouse','Charming tree house! Don’t hesitate to come, it was a great experience.',4.73));
        stays.push(_createStay("104045546","La Réserve de l'Aube - Hébergement Insolite Design",'LRDI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'France','FR','Villenauxe-la-Grande, Grand Est',48.5896,3.5532,'Our accommodations are unusual ecological constructions of great comfort in wood and glass nestled in a green setting in the Dawn, at the gates of Champagne. They all have a large equipped terrace where you can relax and enjoy your meals (optional from €19) and breakfasts (included) in baskets served on request. Guests have free access to the swimming pool area, private deckchairs and bar and snack service',['Free parking','Pool'],'Entire place','Christophe',2,1,1,1,247,['No Smoking', 'No pets','No parties or events'],'Villa','It was one of the best spot i’ve ever had and see in my life. Like something from other plant and feels like home. Wanna stay there more nights but we’ve got back to Paris. Highly recommended.',5));
        stays.push(_createStay("100645546","Amazing view of fjord & mountains glamping Birdbox",'AVOF',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Norway','NO','Gaular, Sogn og Fjordane',61.3451,5.7575,'Enjoy the relaxed and comfortable enclosure of the Birdbox. Sleep right beside nature and its amazing surroundings. Lay down and look at the spectacular mountains all around you. Put on your skis and have a breathtaking journey around the nearby trails. Hike down to Langelandsvatnet in the summer and enjoy swimming in energizing water. Your imagination is the limit for what you can experience.',['Kitchen','Free parking'],'Treehouse','Siv',2,1,1,1,269,['No Smoking', 'No pets','No parties or events'],'Villa','Amazing place and amazing views! Friendly and helpful host.',4.99 ));
        stays.push(_createStay("170045546","Kalle's Inn Glassshouses",'KLG',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Finland','FI','Mustasaari',63.1141,21.6822,'Unique Prism shaped glasshouses with fantastic view over The Gulf of Bothnia. Heated glass will guarantee you a clear view in any weather. Motorized luxury beds will ensure that you can enjoy your stay watching seals, stars, birds. In winter time Aurora Borealis if you are lucky and in summer time the midnight sun.',['Wifi','Free parking','Pool'],'Private room in igloo','Kalles Inn',4,1,2,1,566,['No Smoking', 'No pets','No parties or events'],'Igloo','No reviews (yet)',0));
       
        //PARIS
        stays.push(_createStay("16716546","Beautiful and bright studio in belleville",'BABS',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Hello, If you are looking for a REAL PARISIAN EXPERIENCE, here is the place !My cosy studio is located in the heart of the 19th district of Paris near of the great Parc Buttes Chaumont (1 block away) and the canal Saint Martin (10 mins by walking) my favorite part of Paris (a really romantic place to hang out and ideal for families).The apt itself is situated on the 6th floor with an elevator. The place is really charming, luminous and has a little balcony. If you are lucky enough you will have a wonderful sunset. You will love stay in this neighborhood considered as a nice village atmosphere, with all amenities, bars and restaurants (a great japonese and moroccan and of course a lots of "bistrot français" around the corner).',['Wifi','Kitchen','Washer','Dryer','TV'],'Entire place','Christine',2,1,1,1,79,['No Smoking','No parties or events'],'Rental unit','The host canceled this reservation 2 days before arrival. This is an automated posting.',4.67));
        stays.push(_createStay("16717546","LOUVRE 1: UPPER CLASS SUITE - RUE SAINT HONORE",'LUC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Located in the prestigious rue Saint-Honoré, this bright 2 people studio, recently renovated, is tastefully furnished with high quality material...',['Wifi','Kitchen','TV','Iron'],'Entire place','Alain',2,1,1,1,152,['No Smoking', 'No pets','No parties or events'],'Rental unit','This is a great little flat in a great part of Paris! We were walking distance to many places. you can NOt go wrong with this place!',4.59));
        stays.push(_createStay("16217646","Cosy one bedroom near Grand Boulevards",'COB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Superb 2 room apartment of 50m2 in the heart of the 10th arrondissement, bohemian and typical Parisian district, refurbished, will make you spend a great stay in our capital Perfect for couple or family trips or business travelers :)',['Wifi','TV','Kitchen','Washer','Free parking','Dryer','Iron'],'Entire place','Diane&Jonathan',4,1,2,1,180,['No Smoking', 'No pets','No parties or events'],'Rental unit','Great location and very beautiful, well-maintained space. Be careful of the elevator - can be extremely fickle. Hosts were quick to respond though to any issues.',4.81));
        stays.push(_createStay("16219646","Truly parisien apartment in St Germain des Prés",'TPA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Large 18th century apartment with parquet and woodwork, very comfortable and very quiet overlooking a garden in the heart of St Germain des Près, many museums, restaurants, cafes, shopping all nearby.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire place','Alexandra',2,1,1,1,157,['Smoking allowed', 'No pets','No parties or events'],'Rental unit','If I am ever in Paris again I will stay in this apartment! It was more beautiful than I could have ever imagined and the location was fantastic. Alexandra was so accommodating and quick to respond. I highly recommend this Airbnb.',4.91));
        // stays.push(_createStay("16219346","Cute apartment by the Musée d'Orsay",'CAB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','Pool'],'Entire rental unit','Geoff',10,4,5,3,339,['No Smoking', 'No pets','No parties or events'],'Rental unit','',4.8));
        stays.push(_createStay("16219246","Magnificent flat 1BR/3P - Marais/Republic",'MFB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Looking for a flat for 3 people? Located just a stones throw from the Place de la République and the famous Marais district, dont hesitate!',['Wifi','Kitchen','Washer','TV','Dedicated workspace','Iron'],'Entire place','Check My Guest',3,1,2,1,210,['No Smoking', 'No pets','No parties or events'],'Rental unit','Amazing location in the middle of everything yet on the quietist street, in an elevator building with the bedroom facing the inner courtyard. What more could you ask!',4.94));
        stays.push(_createStay("16319346","Bright & cozy 1 bedroom 4p near Canal St Martin",'BCB',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Paris','PR','Paris, Île-de-France',48.864716,2.349014,'Superb 2 room apartment of 50m2 in the heart of the 10th arrondissement, bohemian and typical Parisian district, refurbished, will make you spend a great stay in our capital Perfect for couple or family trips or business travelers :)',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Diane&Jonathan',4,1,2,1,187,['No Smoking', 'Pets allowed','No parties or events'],'Rental unit','Thanks Nicholas, we could not provide any fan for your 3 days stay at the end of summer while the weather was not hot at all sorry and like you said it was as well mention in the ad',4.61));
        
        //LISBON
         stays.push(_createStay("14435345","Story Flat Lisbon - Alfama",'SFL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'Story Flat Lisbon is an invitation for you to discover your own Lisbon story. This bright and charming apartment offers a true sensory experience of the city, as all the rooms present you with a stunning panoramic view of river Tagus.',['Wifi','Kitchen','Washer','Dedicated workspace','Iron','TV'],'Entire place','Ana & Rita',4,1,2,1,79,['No Smoking', 'No pets','No parties or events'],'Rental unit','This flat is the perfect place to start your Lisbon adventures! The location is very easy to travel around the city and is walking distance from Santa Apolonia train station. The number of restaurants nearby will give you far too many fantastic options. You’ll also be hard pressed to find a prettier view with such nice accommodations. Ana and Rita have really gone out of their way to make this flat a special and relaxing place to come home too. I highly recommend this beautiful flat and would absolutely stay here again if back in Lisbon!',4.84));
         stays.push(_createStay("12348790","Alfama - Historic Center",'AHC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'This small and charming apartment fully restored, offers a wonderful view over the old rooftops of Alfama, the most typical and historic neighbourhood of Lisbon.This flat provides every thing you need for an unforgettable experience.',['Wifi','Kitchen','Dedicated workspace','Iron','TV'],'Entire place','António',2,1,1,1,339,['No Smoking', 'No pets','No parties or events'],'Rental unit','António’s place was lovely! Easy check in and location is great near the center of Alfama. Beware if you can’t do stairs! Bed was comfy and was brought a bottle of wine upon checkin!',4.89));
         stays.push(_createStay("12368900","Stylish 1BR apt in Lisbon Downtown* Baixa",'SAL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'* Your Health first *.We follow the standards recommended by the health authorities.In the charming, central Baixa neighborhood, this 1-bedroom Gonzalo’s Guest apartment is just right for a romantic getaway.If you are visiting Lisbon, be it for business or pleasure, and you need to stay in a modern, cozy, luxurious, clean and convenient place with easy access to all points of interest - then look no further, our exquisite apartment is the perfect place for you!',['Wifi','Kitchen','Washer','Free parking','Iron','TV'],'Entire place','Gonzalos Guest',4,1,2,1,124,['No Smoking', 'No pets'],'Rental unit','Great location, very central. Can be a little noisy with the tram outside but we stayed during the week and had no issues. Good shutter blinds to keep out the street lights and noise',4.7));
         stays.push(_createStay("44568907","Chiado Loft 17 Charm Boutique Apartment",'CLC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'This incredible intimate and comfortable Loft apartment, in a typical Lisbon XIX Century building with no elevator is located in a street that corners with Rua da Bica. Offering a very warm atmosphere. It boasts a very inviting terrace with views over a charming and typical Lisbon street. It offers a living and dinning area, a kitchenette, a mosaic and white marble bathroom with a comfortable shower enclosure, and a bedroom space. The Loft has 3 tall windows that open to the terrace.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Pedro',2,1,1,1,339,['No Smoking', 'No pets','No parties or events'],'Rental unit','the location is convenient and the hosts are great. the space is really cute with beautiful windows and beautiful balcony. highly recommend.',4.95));
         stays.push(_createStay("23426887","Remodeled Historic Apartment in Bairro Alto",'RHA',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'Special COVID-19 : We do a special cleaning disinfecting all the floors, kitchen, bathrooms, doorknobs and all touchable surfaces with a special product, used in hospitals, known by its lasting effect.',['Wifi','Kitchen','Washer','Free parking','Iron','TV'],'Entire place','Vasco',4,1,1,1,62,['No Smoking', 'No pets','No parties or events'],'Rental unit','One of the best air b&bs I’ve stayed in and in a great location (Bairro Alto). The design of the apartment is super well done & there are 3 stunning bay windows in the living room. Vasco met us at the apartment and gave us recommendations for places to eat, where to see Fado, sites to see, etc. There’s a detailed binder that he provides as well with recommendations and important info. Thanks so much for your hospitality! We loved our stay and felt welcome in your beautiful apartment!',4.87));
         stays.push(_createStay("12325466","Lisbon Baronesa Historic Center Apartaments",'LBH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'Charming, spacious and bright apartment on the first floor of a recently restored 19th century building, Historical Center of Lisbon. Traditional neighborhood of Graça. Close to the Castle, Alfama, Praça do Comércio, Mouraria, Monastery of São Vicente de Fora, Feira da Ladra. Neighbor to the Miradouros of Nossa Senhora do Monte and Miradouro da Graça. Close to cafes, supermarkets and restaurants. The traditional Electric 28 has a stop in Largo.',['Wifi','Kitchen','Free parking','Dryer','Iron','TV'],'Entire place','Andreia',4,1,2,1,60,['No Smoking', 'No pets','No parties or events'],'Rental unit','Great place in a great neighborhood. Close to anything you would want. Hosts are very accommodating and friendly! Ask for suggestions and they will give you gems!For this apartment the street noise can be more than you are used to, but use the fans provided to create some white noise and it’s all good!',4.92));
         stays.push(_createStay("55566878","Apartment in the heart of Lisbon",'AIT',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Lisbon','LSB','Lisboa',38.736946, -9.142685,'Very nice apartment in the heart of city. From here you can easily reach most of Lisbon must-see spots by foot (S. Jorge Castle, Alfama, Bairro Alto, Mouraria, Baixa, Chiado, Cais Sodré, Av. Liberdade).Most varied transportation is just around.',['Wifi','Kitchen','Washer','Free parking','Iron','TV'],'Entire place',' Rita & Helder',4,1,1,1,65,['No Smoking', 'No pets','No parties or events'],'Rental unit','Our stay was so wonderful! The apartment is well kept, very comfortable and central to many of the neighborhoods in Lisbon. The street is lined with restaurants serving Portuguese cuisine often with musicians serenading diners. One of our favorite parts about our stay was opening up the balcony door to listen to and watch everything happening below.',4.79));
       
         //LONDON
        stays.push(_createStay("1A4156JF","Stunning Mews House in South Kensington",'SMH',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'A stunning two bedroom mews house in prime west London location. The house has been refurbished and boasts 2 reception rooms across the spacious lower ground floor with wooden floors, utility room and home office. For those travelling with family to be together.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Will',4,2,3,2,371,['No Smoking', 'No pets','No parties or events'],'Rental unit','A wonderful property in a fabulous location! Highly recommended!',4.7));
        stays.push(_createStay("1A5859CA","Unique & Welcoming 2BD Flat in Limehouse",'UWF',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'This two bedroom property is ideally located for a family or friends trip to the city. Not only is the property itself located in an excellent part of the city, near many tourist spots and easy to access transport links, It is also kitted out with everything you would need for a memorable stay. Guests can relax in comfort with a stylishly designed living space as well as a fully kitted out bathroom and cosy bedrooms.',['Wifi','Kitchen','Washer','Free parking','Dedicated workspace','Iron','TV'],'Entire place','Sheryl',3,2,2,1,102,['No Smoking', 'No pets','No parties or events'],'Rental unit','This was the perfect flat. Eclectically furnished, complete, great location - everything we needed.',4.7));
        stays.push(_createStay("1B4959CB","Stay&Co Classic Studio Apartment",'SCC',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'Incredible studio, newly refurbished, modern, cozy and perfect located. The studio has a private bathroom and if it’s furnished with everything you may need.Located in the heart of Covent Garden, you will be a shortly walking distance from Trafalgar Square, Leicester Square and Charing Cross, Soho (6 min walk), Oxford Street (9 min walk) and much more. At the step of the studio, you will find shops, restaurants and bars.',['Wifi','Kitchen','Washer','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Peleg',2,1,1,1,224,['No Smoking', 'No pets','No parties or events'],'condo','Lovely apartment and location, but we had a really disappointing experience with the heat. When we checked in the heat had been left on max, when it was a scorching hot day in London. We were sweating getting ready, and could barely sleep at night because it was 80 degrees F in the apartment, when it was only 60 degrees outside. We received no help with fixing this, and I had to personally research how to turn down the boiler, because the thermostats throughout the apartment were turned to minimum, yet it was still scorching hot. Additionally, the bottom sheets had stains all over them, so we had to sleep on top of the sheets. Bed was also extremely uncomfortable- like sleeping on springs.',4.6));
        stays.push(_createStay("1449594F","Spacious and Quiet Studio near Kings Cross Station",'SAQ',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'Attractive studio situated in a great location in Kings Cross. The station is just a stone throw away (3 min walk) to mainline Kings Cross St Pancras, close to the west end and all major attractions in London, you will find everything you need. The area is full of jazzy restaurants and bars perfect for those spontaneous outings. The flat is in a secured private building, located in the lower ground level, quiet and peaceful. Supermarkets are close by within a few mins walking distance.',['Wifi','Kitchen','Washer','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Rofiqul',2,1,1,1,99,['No Smoking', 'No pets','No parties or events'],'Rental unit','Nice clean little place in a convenient location to Kings Cross station and more. Note that it is a basement place so there is not much natural light if that matters to you.',4.88));
        stays.push(_createStay("1499554D","A pocket full of pearls in the heart of London",'PFO',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'Found in exclusive Kensington, just minutes from the high street and Kensington Gardens, this home scores highly on the quaintness factor with its private mews location. Once inside, the home has a coherent, modern look that feels very calming due to lots of neutral tones. Staying in this luxury Kensington duplex will make your trip to London a truly memorable experience. You’ll soon see why this home is called "A Pocket Full of Pearls", it really is a little gem of a property.',['Wifi','Kitchen','Washer','Dryer','Dedicated workspace','Iron','TV'],'Entire place','VanZyl',2,1,1,2,300,['No Smoking', 'No pets','No parties or events'],'Rental unit','Truly a hidden gem of an Airbnb. Location is great, house is clean, and delicious french bakery on its block. Highly recommend staying here!',4.98));
        stays.push(_createStay("14F95B4A","Stunning Shoreditch Loft Conversion + Movie Screen",'SSL',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'London','LND','Greater London, England',51.509865,-0.118092,'The largest one bedroom apartment in Shoreditch. This unique loft conversion is on a quiet road in the centre of Shoreditch with easy access to everything. The apartment has a piano, pinball machine and a drop down movie screen with everything set up. I only rent to individuals or couples and you must have a positive review to be considered. All guests are looked after by Rosie or Debbie and on hand during your stay if you need any help with anything',['Wifi','Kitchen','Dedicated workspace','Iron'],'Entire place','Jon',2,1,1,1,993,['No Smoking', 'No pets','No parties or events'],'condo','This place is the absolute best! It is everything you see in the photos and more. Jon was incredibly nice, accommodating, and responsive. Can not wait to stay here again!',4.93));
        
        //AMSTERDAM
        stays.push(_createStay("29B83CA5","Luxury, Design, Garden, Vondelpark & Free Bikes!",'LDG',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'This is a very privat ground floor studioapartment( so no steep stairs) with your own privatgarden , in the peaceful so called backhouse of our canalhouse at the Amstel river. extremely central yet very quiet. A privat marble bathroom/ toillet, privat kitchen+ privat (Miele) washingmachine / dryer(etc.).',['Wifi','Kitchen','Washer','Dryer','Dedicated workspace','TV'],'Entire place','Ivo',2,1,1,1,94,['No Smoking', 'No pets','No parties or events'],'Rental unit','Great place with amazing location! Marius is very friendly and accommodating! Would stay again :)',5));
        stays.push(_createStay("29A83DA6","Amsterdam Special Watervilla",'ASW',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'Amsterdam Special Watervilla is a luxurious watervilla on a hotspot in town near Dam, Nemo, NieuwMarkt, Central Station, WaterlooPlein. In the heart of the city, but still in an oasis of quietness and privacy. You can swim in the waters in front of the door, sun bathe on deck or enjoy the luxury in doors.',['Wifi','Kitchen','Washer','Free parking','Dedicated workspace','TV'],'Private room in houseboat','Pedja&Nina',4,2,2,1.5,286,['No Smoking', 'No pets','No parties or events'],'Private room','We had a wonderful stay, the house boat was incredibly clean and hospitable. The location was perfect, just a 5-10 minute walk to the main train station.',4.55));
        stays.push(_createStay("27A84DA6","Design house with wellness & sauna",'DHW',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Zwanenburg, Noord-Holland',52.377956,4.897070,'Great location,Very near Amsterdam and Haarlem. Total privé house only 10 minutes walk to the station ,Lovely design house on the water with hotel beds , & your own sauna.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Sendra&Guy',6,3,4,1.5,253,['No Smoking', 'No pets','No parties or events'],'Residential home','Amazing place the location was just a bit further than we thought. But great place. Will stay again.',4.63));
        stays.push(_createStay("29863CA6","Central & Modern Eco-houseboat at the IJ water",'CME',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'Beautiful, bright and private studio rooms in a recently renovated Amsterdam eco-houseboat. It has en suite bathrooms and stunning views over the IJ water. Located in the city-centre, nearby the famous Jordaan area.',['Wifi','TV','Washer','Dedicated workspace'],'Entire place','Arie',4,2,2,3,404,['No Smoking', 'No pets','No parties or events'],'Houseboat','beautifully renovated houseboat, close to the city centre, stunning view on a part of the skyline',4.82));
        stays.push(_createStay("2983BA67","Great Houseboat in Amsterdam Centrum",'GHI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'It is a spacious and comfortable place on a quiet canal. You can see ducks from the windows. Two bedrooms, one bathroom and a nice living room to enjoy. It is decorated in a modern style and peaceful colors.',['Wifi','Kitchen','TV','Free parking','Dedicated workspace'],'Entire place','Isadora And Cristian',4,2,2,1,265,['No Smoking', 'No pets','No parties or events'],'Houseboat ','Great spot. Exactly as advertised. Walking distance to most anything you want to do and tram to central station right outside if going farther (e.g. we went to Ajax football match). Highly recommend.',5));
        stays.push(_createStay("2943FA68","Amazing houseboat in Amsterdam city center",'AHI',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'My place is right on the canal in the best possible location. You’ll love it because of the ambiance of being on a houseboat and our neighbourhood. It is good for couples, friends, business travelers, and families (incl with kids).',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','TV'],'Entire place','Maarten',4,2,3,1,508,['No Smoking', 'No pets','No parties or events'],'Houseboat','Such a great and unique stay. Amazing location and truly an insider experience. Hosts are very responsive and helpful. Highly recommend staying here!!',5));
        stays.push(_createStay("2589BG27","New Appt: Perfect for family in great location",'NAP',['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg'],'Amsterdam','AMS','Amsterdam, Noord-Holland',52.377956,4.897070,'Comfortable, new appt in quiet, green neighborhood in convenient, authentic Amsterdam-West. Ideal home base to easily explore attractions of Amsterdam-Centre all day while coming back to enjoy peace & quiet to sleep.',['Wifi','Kitchen','Washer','Free parking','Dryer','Dedicated workspace','Iron','TV'],'Entire place','Michael',4,1,3,1.5,283,['No Smoking', 'Pets allowed','No parties or events'],'condo','Michaels place was clean, cozy, and in an excellent relaxing location. It is around 1-2 miles away from the city center, which is an affordable Uber, but also 3 minutes away from the bus and train station. Thus, it is pretty economical to get to from an airport.Michael provided great tips about what to do in Amsterdam, and was very knowledgeable about attractions in the city center, but also local gems around the apartment unit. Would stay again if I returned to Amsterdam',4.84));

        utilService.saveToStorage(STAY_KEY, stays);
    }
    return stays;
}


function _createStay(id,name,initials,imgUrls,country,countryCode,address,lat,lng,summary,amenities,typeOfPlace, fullName, accommodates, bedrooms, beds, bath, price,HouseRules,propertyType,txt,rate) {
    return {
        id,
        name,
        initials,
        imgUrls,
        price,
        summary,
        propertyType,
        typeOfPlace,
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