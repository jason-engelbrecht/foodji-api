import Service from "./service";
import bcrypt from "bcrypt";
import {User} from "../models/user";

export default class UserService extends Service {

    constructor() {
        super();
        console.log("I am a user service");
    }

    registerUser(userData, callback) {
        const errMessage = 'Error registering user';
        const saltRounds = 12;

        bcrypt.hash(userData.password, saltRounds, (err, hashedPassword) => {
            if (err) return this.handleError(err, errMessage, callback);

            userData.password = hashedPassword;
            const user = new User(userData);
            user.save((err) => {
                if (err) this.handleError(err, errMessage, callback);
                console.log('User saved: ' + user);
                callback();
            });
        });
    }
}
