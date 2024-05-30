const pool = require('../db')
import { Request, Response } from 'express';

class MovieController{

    async getSavedMovies(req: Request, res: Response){
        try {
            const savedMovies = await pool.query(`select * from saved_movies`)
            res.json(savedMovies.rows)    
        } catch (error) {
            res.json(error)
        }

    }

    async getHistoryMovies(req: Request, res: Response){
        try {
            const historyMovies = await pool.query('select * from history_movies')
            res.json(historyMovies.rows) 
        } catch (error) {
            res.json(error)
        }
    }

    async deleteFromSaved(req: Request, res: Response){
        try {
            const {imdbid} = req.params;
            const deletedItem = await pool.query("delete from saved_movies where imdbid=$1", [imdbid])
            res.json(deletedItem.rows[0])    
        } catch (error) {
            res.json(error)
        }
    }

    async deleteFromHistory(req: Request, res: Response){
        try {
            const {imdbid} = req.params;
            const deletedItem = await pool.query("delete from history_movies where imdbid=$1", [imdbid])
            res.json(deletedItem.rows[0])    
        } catch (error) {
            res.json(error)
        }
    }

    async addToSaved(req: Request, res: Response){
        try {
            const date = new Date()
            const {Title, Year, imdbID, Type, Poster} = req.body;
            const savedMovie = await pool.query(`insert into saved_movies(Title, Year, imdbID, Type, Poster, Date) values ($1, $2, $3, $4, $5, $6)`, [Title, Year, imdbID, Type, Poster, date])
            res.json(savedMovie.rows[0])
        } catch (error) {
            res.json(error)
        }
    }

    async addToHistory(req: Request, res: Response){
        try {
            const completedAt = new Date()
            const {Title, Year, imdbID, Type, Poster, rating} = req.body;
            const historyMovie = await pool.query('insert into history_movies(Title, Year, imdbID, Type, Poster, rating, completedAt) values ($1, $2, $3, $4, $5, $6, $7)', [Title, Year, imdbID, Type, Poster, rating, completedAt])
            res.json(historyMovie.rows[0])
        } catch (error) {
            res.json(error)
        }
    }
}

export default new MovieController();

