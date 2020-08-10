import express from 'express';
import UserService from "../services/user_service";

const router = express.Router();
const userService = new UserService();

router.post('/register', (req, res) => {
    const userData = req.body;
    userService.registerUser(userData, (err) => {
        if (err) res.status(500).send({message: 'Error registering user'});
        res.sendStatus(200);
    });
});

export default router;
