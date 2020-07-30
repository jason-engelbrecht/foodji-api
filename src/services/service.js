import { dbConfig } from "../config/db_config";

export default class Service {
    connectionPool;

    constructor() {
        if (new.target === Service) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        //TODO connect to DB, establish pool
    }
}
