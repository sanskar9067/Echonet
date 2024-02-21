import express from 'express';
import { registerController, loginController, forgotPasswordController } from '../controller/authController.js';
import { deletePost, postController } from '../controller/postController.js';
import { friendController } from '../controller/friendController.js';
import { deleteImagePost } from '../controller/imagePostController.js';

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgotpassword", forgotPasswordController);
router.post("/post", postController);
router.post("/addfriend", friendController);
router.post("/deletepost", deletePost);
router.post("/deleteimagepost", deleteImagePost);

export default router;