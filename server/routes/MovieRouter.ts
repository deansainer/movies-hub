import {Router} from 'express';
import MovieController from '../controllers/MovieController'

const router = Router()

router.delete('/saved/delete/:imdbid', MovieController.deleteFromSaved)
router.post('/addToHistory', MovieController.addToHistory)
router.post('/post', MovieController.addToSaved)
router.get('/saved', MovieController.getSavedMovies)

export default router;