import express from 'express'
import path from 'path'

import {fileURLToPath} from 'url'

import petData from '../data/pets.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req, res) => {
    res.status(200).json(petData)
})

router.get('/:petId', (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, '../../client/public/pet.html'))

})

export default router