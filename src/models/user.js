import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    avatar_location: String,
    date_created: {type: Date, default: Date.now},
    favorite_dish: {type: String, default: null},
    favorite_categories: [{
        category_id: mongoose.Types.ObjectId,
        category_name: String
    }],
    saved_recipes: [{
        recipe_id: mongoose.Types.ObjectId,
        title: String
    }],
    followers: [{
        user_id: mongoose.Types.ObjectId,
        display_name: String
    }],
    following: [{
        user_id: mongoose.Types.ObjectId,
        display_name: String
    }]
});

export const User = mongoose.model('User', userSchema);
