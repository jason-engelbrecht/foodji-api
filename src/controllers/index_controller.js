import express from 'express';
import RecipeService from "../services/recipe_service";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world');
    let service = new RecipeService();
});

export default router;
