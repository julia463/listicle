const petData = [
    {
        "id": 1,
        "animal_type": "Parrot",
        "name": "Benny",
        "age": 1,
        "breed": "Amazon Parrot",
        "personality": [
            "reactive",
            "curious"
        ]
    },
    {
        "id": 2,
        "animal_type": "Guinea Pig",
        "name": "Milo",
        "age": 9,
        "breed": "Peruvian",
        "personality": [
            "playful",
            "reactive",
            "shy"
        ]
    },
    {
        "id": 3,
        "animal_type": "Cat",
        "name": "Oscar",
        "age": 10,
        "breed": "Maine Coon",
        "personality": [
            "shy",
            "energetic",
            "friendly"
        ]
    },
    {
        "id": 4,
        "animal_type": "Fish",
        "name": "Gizmo",
        "age": 13,
        "breed": "Neon Tetra",
        "personality": [
            "affectionate",
            "lazy",
            "friendly"
        ]
    },
    {
        "id": 5,
        "animal_type": "Turtle",
        "name": "Lola",
        "age": 9,
        "breed": "Snapping Turtle",
        "personality": [
            "independent",
            "reactive"
        ]
    },
    {
        "id": 6,
        "animal_type": "Parrot",
        "name": "Molly",
        "age": 7,
        "breed": "Budgerigar",
        "personality": [
            "reactive",
            "curious"
        ]
    },
    {
        "id": 7,
        "animal_type": "Hamster",
        "name": "Max",
        "age": 13,
        "breed": "Campbell's Dwarf",
        "personality": [
            "affectionate",
            "shy",
            "curious"
        ]
    },
    {
        "id": 8,
        "animal_type": "Parrot",
        "name": "Gizmo",
        "age": 9,
        "breed": "Amazon Parrot",
        "personality": [
            "sassy"
        ]
    },
    {
        "id": 9,
        "animal_type": "Guinea Pig",
        "name": "Peanut",
        "age": 8,
        "breed": "Abyssinian",
        "personality": [
            "friendly",
            "curious",
            "lazy"
        ]
    },
    {
        "id": 10,
        "animal_type": "Dog",
        "name": "Charlie",
        "age": 11,
        "breed": "Beagle",
        "personality": [
            "playful",
            "friendly"
        ]
    },
    {
        "id": 11,
        "animal_type": "Rabbit",
        "name": "Luna",
        "age": 6,
        "breed": "Mini Rex",
        "personality": [
            "curious",
            "energetic"
        ]
    },
    {
        "id": 12,
        "animal_type": "Cat",
        "name": "Milo",
        "age": 5,
        "breed": "Ragdoll",
        "personality": [
            "lazy",
            "affectionate"
        ]
    },
    {
        "id": 13,
        "animal_type": "Dog",
        "name": "Daisy",
        "age": 7,
        "breed": "Labrador Retriever",
        "personality": [
            "friendly",
            "energetic"
        ]
    },
    {
        "id": 14,
        "animal_type": "Hamster",
        "name": "Bella",
        "age": 3,
        "breed": "Syrian",
        "personality": [
            "playful",
            "shy"
        ]
    },
    {
        "id": 15,
        "animal_type": "Fish",
        "name": "Oscar",
        "age": 2,
        "breed": "Betta",
        "personality": [
            "sassy",
            "lazy"
        ]
    },
    {
        "id": 16,
        "animal_type": "Rabbit",
        "name": "Rocky",
        "age": 8,
        "breed": "Lionhead",
        "personality": [
            "sassy",
            "playful"
        ]
    },
    {
        "id": 17,
        "animal_type": "Guinea Pig",
        "name": "Nala",
        "age": 10,
        "breed": "American",
        "personality": [
            "shy",
            "friendly"
        ]
    },
    {
        "id": 18,
        "animal_type": "Cat",
        "name": "Lucy",
        "age": 14,
        "breed": "Siamese",
        "personality": [
            "independent",
            "sassy"
        ]
    },
    {
        "id": 19,
        "animal_type": "Parrot",
        "name": "Leo",
        "age": 4,
        "breed": "Macaw",
        "personality": [
            "energetic",
            "playful"
        ]
    },
    {
        "id": 20,
        "animal_type": "Dog",
        "name": "Coco",
        "age": 12,
        "breed": "Poodle",
        "personality": [
            "curious",
            "independent"
        ]
    },
    {
        "id": 21,
        "animal_type": "Turtle",
        "name": "Rosie",
        "age": 7,
        "breed": "Box Turtle",
        "personality": [
            "lazy",
            "friendly"
        ]
    },
    {
        "id": 22,
        "animal_type": "Hamster",
        "name": "Chloe",
        "age": 2,
        "breed": "Chinese",
        "personality": [
            "friendly",
            "lazy",
            "affectionate"
        ]
    },
    {
        "id": 23,
        "animal_type": "Fish",
        "name": "Daisy",
        "age": 15,
        "breed": "Betta",
        "personality": [
            "curious"
        ]
    },
    {
        "id": 24,
        "animal_type": "Hamster",
        "name": "Zoe",
        "age": 14,
        "breed": "Campbell's Dwarf",
        "personality": [
            "curious",
            "sassy",
            "affectionate"
        ]
    },
    {
        "id": 25,
        "animal_type": "Turtle",
        "name": "Charlie",
        "age": 12,
        "breed": "Red-Eared Slider",
        "personality": [
            "independent"
        ]
    },
    {
        "id": 26,
        "animal_type": "Turtle",
        "name": "Max",
        "age": 14,
        "breed": "Snapping Turtle",
        "personality": [
            "energetic",
            "sassy"
        ]
    },
    {
        "id": 27,
        "animal_type": "Cat",
        "name": "Pumpkin",
        "age": 13,
        "breed": "Sphynx",
        "personality": [
            "independent",
            "affectionate"
        ]
    },
    {
        "id": 28,
        "animal_type": "Parrot",
        "name": "Leo",
        "age": 8,
        "breed": "African Grey",
        "personality": [
            "shy",
            "affectionate",
            "sassy"
        ]
    },
    {
        "id": 29,
        "animal_type": "Rabbit",
        "name": "Lola",
        "age": 13,
        "breed": "Netherland Dwarf",
        "personality": [
            "shy",
            "curious",
            "lazy"
        ]
    },
    {
        "id": 30,
        "animal_type": "Rabbit",
        "name": "Molly",
        "age": 12,
        "breed": "Holland Lop",
        "personality": [
            "friendly",
            "sassy"
        ]
    }
]

export default petData