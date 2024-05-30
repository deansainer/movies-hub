import {Router} from 'express';
import MovieController from '../controllers/MovieController'

const router = Router()

//history routes
router.delete('/history/delete/:imdbid', MovieController.deleteFromHistory)
router.post('/history/add', MovieController.addToHistory)
router.get('/history', MovieController.getHistoryMovies)
//saved routes
router.delete('/saved/delete/:imdbid', MovieController.deleteFromSaved)
router.post('/saved/add', MovieController.addToSaved)
router.get('/saved', MovieController.getSavedMovies)

export default router;