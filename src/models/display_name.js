import mongoose from 'mongoose';

const displayNameSchema = new mongoose.Schema({
    display_name: String
});

export const DisplayName = mongoose.model('DisplayName', displayNameSchema);
