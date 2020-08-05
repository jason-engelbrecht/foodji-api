import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    avatar_location: String,
    dateCreated: { type: Date, default: Date.now },
    favorite_dish: String,
    favorite_categories: [{
        category_id: ObjectId,
        category_name: String
    }],
    saved_recipes: [{
        recipe_id: ObjectId
    }]
});

export const User = mongoose.model('User', userSchema);
