import imagePostModel from "../model/imagePostModel.js";

export const deleteImagePost = async (req, res) => {
    try {
        const { id } = req.body;
        const delData = await imagePostModel.deleteOne({ _id: id });
        if (delData) {
            res.status(200).send({
                success: true,
                message: "Post Deleted"
            })
        } else {
            res.status(500).send({
                success: false,
                message: "Post Not Deleted"
            })
        }
    }
    catch (err) {
        cres.status(400).send({
            success: false,
            message: "Something went wrong"
        })
    }
}