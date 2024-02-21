import postModel from "../model/postModel.js";
import cors from 'cors';

export const postController = async (req, res) => {
    try {
        const { name, email, post, likes } = req.body;
        if (!name || !email || !post) {
            res.status(400).send({
                success: false,
                message: "details missing"
            })
        }
        else {
            const newPost = await new postModel({ name, email, post, likes }).save();
            if (newPost) {
                res.status(200).send({
                    success: true,
                    message: "Post posted"
                })
                console.log(newPost);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        const delPost = await postModel.deleteOne({ _id: id });
        if (delPost) {
            res.status(200).send({
                success: true,
                message: "Post Deleted"
            });
        }
        else {
            res.status(500).send({
                success: false,
                message: "Post Not Deleted"
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}