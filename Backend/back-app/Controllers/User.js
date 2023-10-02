import bcrypt from 'bcrypt'
import User from "../Model/User.js";


/* Get all users */
export const getUsers = async (req, res) => {
    try {
        const users = await     User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/* Get one user */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/* Register an user */
export const register =  async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            location,
            occupation
        })
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (err) {
        res.status(401).json({ message: err.message })
    }

}

/* Login */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if(!user) {
            return res.status(400).json({ msg: "User does not exist."})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials."})
        }
        delete user.password;
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}