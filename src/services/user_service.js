import Service from "./service";
import bcrypt from "bcrypt";
import {User} from "../models/user";

export default class UserService extends Service {

    constructor() {
        super();
        console.log("I am a user service");
    }

    registerUser(userData, callback) {
        const saltRounds = 12;

        bcrypt.hash(userData.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                this.logError(err, 'Error hashing password');
                callback(err);
            } else {
                userData.password = hashedPassword;
                const user = new User(userData);
                user.save((err) => {
                    if (err) this.logError(err, 'Error saving user');
                    callback(err);
                });
            }
        });
    }
}
