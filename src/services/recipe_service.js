import Service from "./service";
import {Recipe} from "../models/recipe";

export default class RecipeService extends Service {

    constructor() {
        super();
        console.log("I am a recipe service");
    }

    postRecipe(recipeData, callback) {
        const recipe = new Recipe(recipeData);
        recipe.save((err) => {
            if (err) this.logError(err, 'Error saving recipe');
            callback(err, recipe);
        });
    }

    async getAllRecipes() {
        const recipes = await Recipe.find({});
        return recipes;
    }
}
