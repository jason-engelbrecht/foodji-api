import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    dateCreated: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);
