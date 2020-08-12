import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    hrs_to_make: Number,
    mins_to_make: Number,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    image_location: String,
    date_posted: { type: Date, default: Date.now },
    ingredients: [{
        measurement: String,
        ingredient: String
    }],
    instructions: [{
        instruction: String
    }],
    category: {
        category_id: String,
        category_name: String,
    },
    owner: {
        user_id: String,
        display_name: String,
    }
});

export const Recipe = mongoose.model('Recipe', recipeSchema);
