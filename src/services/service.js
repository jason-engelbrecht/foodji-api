import mongoose from "mongoose";
import { dbConfig } from "../config/db_config";

export default class Service {

    constructor() {
        if (new.target === Service) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this._connectToDB();
    }

    logError(err, message) {
        console.error({err: err, message: message});
    }

    _connectToDB() {
        mongoose.connect(dbConfig.uri, dbConfig.options);

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', () => {
            console.log("Connected!")
        });
    }
}
