import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLocation: String,
    hoursToMake: Number,
    minutesToMake: Number,
    ingredients: Array,
    instructions: Array,
    category: String,
    datePosted: { type: Date, default: Date.now },
    comments: Array,
    likes: Number,
    owner: ObjectId
});

export const Recipe = mongoose.model('Recipe', recipeSchema);
