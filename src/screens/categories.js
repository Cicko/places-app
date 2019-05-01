/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 26-July-2018
 *
 */

let categories = [
    {
        name: 'Night life',
        category: 'nightlife',
        image: require('../assets/img/categories/nightlife.jpg'),
        categories: [
            {
                name: 'Night clubs',
                category: 'night+clubs',
                image: require('../assets/img/categories/night+clubs.jpg'),
            },
            {
                name: 'Jazz bars',
                category: 'jazz+bar',
                image: require('../assets/img/categories/jazz+bar.jpg'),
            },
            {
                name: 'Karaoke',
                category: 'karaoke',
                image: require('../assets/img/categories/karaoke.jpg'),
            },
        ]
    },
    {
        name: 'Nutrition',
        category: 'nutrition',
        image: require('../assets/img/categories/nutrition.jpg'),
        categories: [
            {
                name: 'coffee',
                category: 'coffee',
                image: require('../assets/img/categories/coffee.jpg'),
            },
            {
                name: 'Restaurants',
                category: 'restaurants',
                image: require('../assets/img/categories/restaurants.jpg'),
            },
            {
                name: 'Vegan restaurants',
                category: 'vegan+restaurants',
                image: require('../assets/img/categories/vegan+restaurants.jpg'),
            },
            {
                name: 'Asian restaurants',
                category: 'asian+restaurants',
                image: require('../assets/img/categories/asian+restaurants.jpg'),
            },
            {
                name: 'Indian restaurants',
                category: 'indian+restaurants',
                image: require('../assets/img/categories/indian+restaurants.jpg'),
            },
            {
                name: 'Fast food',
                category: 'fast+food',
                image: require('../assets/img/categories/fast+food.jpg'),
            },
        ],
    },
    {
        name: 'Discover',
        category: 'discover',
        image: require('../assets/img/categories/discover.jpg'),
        categories: [
            {
                name: 'Museums',
                category: 'museums',
                image: require('../assets/img/categories/museums.jpg'),
            },
            {
                name: 'Historic places',
                category: 'historic',
                image: require('../assets/img/categories/historic.jpg'),
            },
            {
                name: 'Concert Halls',
                category: 'concert+halls',
                image: require('../assets/img/categories/concert+hall.jpg'),
            }
        ]
    },
    {
        name: 'Nature',
        category: 'nature',
        image: require('../assets/img/categories/nature.jpg'),
        categories: [
            {
                name: 'Parks',
                category: 'parks',
                image: require('../assets/img/categories/parks.jpg'),
            },
            {
                name: 'Forest',
                category: 'forest',
                image: require('../assets/img/categories/forest.jpg'),
            },
            {
                name: 'Lakes',
                category: 'lakes',
                image: require('../assets/img/categories/lake.jpg'),
            },
            {
                name: 'Mountains',
                category: 'mountains',
                image: require('../assets/img/categories/mountains.jpg'),
            },
            {
                name: 'Beaches',
                category: 'beaches',
                image: require('../assets/img/categories/beaches.jpeg'),
            }
        ],
    },
    {
        name: 'Shops',
        category: 'shops',
        image: require('../assets/img/categories/shops.jpg'),
    },
    {
        name: 'Public services',
        category: 'public+services',
        image: require('../assets/img/categories/library.jpeg'),
        categories: [
            {
                name: 'Parkings',
                category: 'parkings',
                image: require('../assets/img/categories/parking.jpeg'),
            },
            {
                name: 'Libraries',
                category: 'libraries',
                image: require('../assets/img/categories/library.jpeg'),
            },
            {
                name: 'Hospitals',
                category: 'hospital',
                image: require('../assets/img/categories/hospital.jpeg'),
            },
            {
                name: 'Universities',
                category: 'universities',
                image: require('../assets/img/categories/university.jpeg'),
            },
            {
                name: 'Post offices',
                category: 'post+office',
                image: require('../assets/img/categories/post+office.jpeg'),
            },
            {
                name: 'Hairdressers',
                category: 'hairdresser',
                image: require('../assets/img/categories/hairdresser.jpeg'),
            },
        ]

    }
];

export default categories;
