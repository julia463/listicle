import {pool} from '../config/database.js'

const getPets = async (req, res) => {
    console.log("reached slash pets")
    try{
        const results = await pool.query('SELECT * FROM pets ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export default {
    getPets
}