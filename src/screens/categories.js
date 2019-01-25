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
            }
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
        ],
    },
    {
        name: 'Shops',
        category: 'shops',
        image: require('../assets/img/categories/shops.jpg'),
    },
];

export default categories;
