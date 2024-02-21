import friendModel from "../model/friendModel.js";
import userModel from "../model/userModel.js"

export const friendController = async (req, res) => {
    try {
        const { userEmail, friendEmail } = req.body;
        const userData = await new friendModel({ userEmail, friendEmail }).save();
        if (userData) {
            res.status(200).send({
                success: true,
                message: "Friend added"
            })
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err
        })
        console.log(err);
    }
}
