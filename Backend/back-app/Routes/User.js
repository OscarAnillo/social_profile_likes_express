import express from 'express';
import { getUser, getUsers, login, register } from '../Controllers/User.js';
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/register", register);
router.post("/login", login)

export default router