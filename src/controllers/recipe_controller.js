import express from 'express';
import RecipeService from "../services/recipe_service";

const router = express.Router();
const recipeService = new RecipeService();

router.post('/post', (req, res) => {
    const recipeData = req.body;
    recipeService.postRecipe(recipeData, (err, recipe) => {
        if (err) res.status(500).send({message: 'Error posting recipe'});
        else res.send(recipe);
    });
});

export default router;
