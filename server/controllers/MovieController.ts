const pool = require('../db')
import { Request, Response } from 'express';

class MovieController{

    async addToSaved(req: Request, res: Response){
        try {
            const date = new Date()
            const {Title, Year, imdbID, Type, Poster} = req.body;
            const savedMovie = await pool.query(`insert into saved_movies(Title, Year, imdbID, Type, Poster, Date) values ($1, $2, $3, $4, $5, $6)`, [Title, Year, imdbID, Type, Poster, date])
        res.json(savedMovie.rows[0])
        } catch (error) {
            res.json('error')
        }
    }

    async getSavedMovies(req: Request, res: Response){
        try {
            const savedMovies = await pool.query(`select * from saved_movies`)
            res.json(savedMovies.rows)    
        } catch (error) {
            res.json('error')
        }

    }
}

export default new MovieController();

