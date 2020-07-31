import express from 'express';
import UserService from "../services/user_service";

const router = express.Router();
const userService = new UserService();

router.get('/', (req, res) => {
    userService.registerNewUser('email', 'password');
    res.send('I am the user controller');
});

export default router;
