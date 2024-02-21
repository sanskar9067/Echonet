import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(200).send({
                success: false,
                message: "Details Missing"
            })
        }
        else {
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                res.status(400).send({
                    success: false,
                    message: "User already exist"
                })
            }
            const userData = await new userModel({ name, email, password }).save();
            if (userData) {
                res.status(200).send({
                    success: true,
                    message: "User Registered"
                });
            }
            else {
                res.status(200).send({
                    success: false,
                    message: "Something went wrong"
                });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log("Details missing");
        }
        const loggedUser = await userModel.findOne({ email });
        if (loggedUser) {
            if (password === loggedUser.password) {
                const token = JWT.sign({ _id: loggedUser.id }, 'HSKAMNVLNSLNLKCNSL', { expiresIn: '7d' });
                res.status(200).json({
                    success: true,
                    message: "Logged In",
                    user: {
                        name: loggedUser.name,
                        email: loggedUser.email
                    },
                    token
                });
                console.log(token);
            }
            else {
                res.status(400).send({
                    success: false,
                    message: "Incorrect password"
                });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).send({
                success: false,
                message: "details missing"
            })
        }
        else {
            const res = await userModel.findOneAndUpdate({ email: email }, { $set: { password: password } }, { new: false });
        }

    }
    catch (err) {
        console.log(err);
    }
}

