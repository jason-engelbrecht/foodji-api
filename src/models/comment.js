import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: String,
    date_posted: { type: Date, default: Date.now },
    user: {
        user_id: mongoose.Types.ObjectId,
        display_name: String,
    },
    recipe_id: mongoose.Types.ObjectId
});

export const Comment = mongoose.model('Comment', commentSchema);
