// There are many zoos
// Each zoo has many animals
// Animals have favorite foods

const zoos = [
    {
        'zooId': '0',
        'name': 'SF Zoo',
        'animals': [
            {
                'animalId': '1',
                'name': 'tiger',
                'favorite_food': 'meat'
            },
            {
                'animalId': '2',
                'name': 'polar_bear',
                'favorite_food': 'meat'
            },
            {
                'animalId': '3',
                'name': 'monkey',
                'favorite_food': 'banana'
            },
            {
                'animalId': '4',
                'name': 'pigeon',
                'favorite_food': 'crums'
            },
            {
                'animalId': '5',
                'name': 'squirel',
                'favorite_food': 'nuts'
            }
        ]
    },
    {
        'zooId': '1',
        'name': 'Oakland Zoo',
        'animals': [
            {
                'animalId': '1',
                'name': 'lion',
                'favorite_food': 'meat'
            },
            {
                'animalId': '2',
                'name': 'brown_bear',
                'favorite_food': 'meat'
            },
            {
                'animalId': '3',
                'name': 'whale',
                'favorite_food': 'krill'
            },
            {
                'animalId': '4',
                'name': 'dolphin',
                'favorite_food': 'fish'
            },
            {
                'animalId': '5',
                'name': 'shark',
                'favorite_food': 'fish'
            }
        ]
    },
    {
        'zooId': '2',
        'name': 'LA Zoo',
        'animals': [
            {
                'animalId': '1',
                'name': 'parrot',
                'favorite_food': 'seeds'
            },
            {
                'animalId': '2',
                'name': 'penguin',
                'favorite_food': 'fish'
            },
            {
                'animalId': '3',
                'name': 'seal',
                'favorite_food': 'fish'
            },
            {
                'animalId': '4',
                'name': 'alligator',
                'favorite_food': 'meat'
            },
            {
                'animalId': '5',
                'name': 'humans',
                'favorite_food': 'Mac Donalds'
            }
        ]
    }
];

const express = require('express');

const app = express();

const PORT = 3000

// ROUTES

app.get('/zoos', (req, res) => {
    res.json(zoos);
});

app.get('/zoos/:id', (req, res) => {
    let zoo = zoos[req.params.id];
    res.json(zoo);
});

app.get('/zoos/:id/animals', (req, res) => {
    let zoo = zoos[req.params.id];
    let animals = zoo['animals'];
    res.json(animals);
});

app.get('/zoos/:id/animals/:animalId', (req, res) => {
    let zoo = zoos[req.params.id];
    let animals = zoo['animals'];
    let animal = animals[req.params.animalId];
    res.json(animal);
});

app.listen(PORT, function() {
    console.log('listening on', PORT);
});