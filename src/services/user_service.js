import Service from "./service";
import {User} from '../models/user';

export default class UserService extends Service {

    constructor() {
        super();
        console.log("I am a user service");
    }

    registerNewUser(email, password) {
        const newUser = new User({
            email: email,
            password: password
        });

        newUser.save((err, newUser) => {
            if (err) return console.error(err);
            console.log(newUser);
        });
    }
}
