import { pool } from "./database.js";
import './dotenv.js'
import petData from "../data/pets.js";


const createPetsTable = async() => {
    const createTableQuery = `
    DROP TABLE IF EXISTS pets;

    CREATE TABLE IF NOT EXISTS pets (
        id SERIAL PRIMARY KEY,
        animal_type VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL, 
        age INTEGER NOT NULL,
        breed VARCHAR(255) NOT NULL,
        personality TEXT[]
    )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('pets table created successfully')
    } catch (err){
        console.error('error creating the pets table')
    }

}

const seedPetsTable = async () => {
    await createPetsTable()

    petData.forEach((pet) => {
        const insertQuery = {
            //do i need to do the id or is it given?
            text: 'INSERT INTO pets (animal_type, name, age, breed, personality) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            pet.animal_type,
            pet.name,
            pet.age,
            pet.breed,
            pet.personality
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error('error inserting pet', err)
                return
            }
            console.log(`${pet.name} added successfully`)
        })
    })

}
seedPetsTable()