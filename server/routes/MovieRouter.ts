import {Router} from 'express';
import MovieController from '../controllers/MovieController'

const router = Router()

router.post('/post', MovieController.addToSaved)
router.get('/saved', MovieController.getSavedMovies)


export default router;