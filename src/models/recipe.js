import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    hrs_to_make: Number,
    mins_to_make: Number,
    likes: Number,
    dislikes: Number,
    image_location: String,
    date_posted: { type: Date, default: Date.now },
    ingredients: [{
        ingredient: String,
        measurement: String
    }],
    instructions: [{
        instruction: String
    }],
    category: {
        category_id: ObjectId,
        category_name: String,
    },
    owner: {
        user_id: ObjectId,
        display_name: String,
    }
});

export const Recipe = mongoose.model('Recipe', recipeSchema);
