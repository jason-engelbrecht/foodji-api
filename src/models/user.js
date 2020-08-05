import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    display_name: String,
    avatar_location: String,
    date_created: { type: Date, default: Date.now },
    favorite_dish: String,
    favorite_categories: [{
        category_id: mongoose.Types.ObjectId,
        category_name: String
    }],
    saved_recipes: [{
        recipe_id: mongoose.Types.ObjectId,
        title: String
    }]
});

export const User = mongoose.model('User', userSchema);
