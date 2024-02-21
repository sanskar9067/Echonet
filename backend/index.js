import express, { response } from 'express';
import connectDB from './db/db.js'
import routes from './routes/routes.js';
import morgan from 'morgan';
import cors from 'cors';
import postModel from './model/postModel.js';
import userModel from './model/userModel.js';
import multer from 'multer';
import imagePostModel from './model/imagePostModel.js';

const PORT = 3001;

const app = express();

connectDB();

app.use(morgan(`dev`));
app.use(express.json());
app.use(cors());
app.use(`/api/v1/auth`, routes);
app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage });

app.post("/postupload", upload.single('file'), async (req, res) => {
    const { name, email, post } = req.body;
    const location = `${req.file.filename}`;
    const likes = 0;
    const postData = await imagePostModel({ name, email, post, location, likes }).save();
    if (postData) {
        res.status(200).send({
            success: true,
            message: "post uploaded"
        })
    }
    else {
        res.status(500).send({
            success: false,
            message: "post not uploaded"
        })
    }
})

app.get("/getimagepost", (req, res) => {
    imagePostModel.find()
        .then(imagepost => res.json(imagepost))
        .catch(err => res.json(err));
})

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/getpost", (req, res) => {
    postModel.find()
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

app.get("/getuser", (req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.get("/getuserpost", (req, res) => {
    const { email } = req.query;
    postModel.find({ email })
        .then(posts => res.json(posts))
        .catch(err => console.log(err));
})

app.get("/getuserimagepost", (req, res) => {
    const { email } = req.query;
    console.log("\n" + email);
    imagePostModel.find({ email: email })
        .then(userimagepost => res.json(userimagepost))
        .catch(err => res.json(err));
})

app.post("/addlike", (req, res) => {
    const { id } = req.body;
    postModel.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } }, { new: true }).catch(err => console.log(err));
})

app.post("/addimagelike", (req, res) => {
    const { id } = req.body;
    imagePostModel.findOneAndUpdate({ _id: id }, { $inc: { likes: 1 } }, { new: true }).catch(err => console.log(err));
})


app.listen(PORT, () => {
    console.log(`Connected to server on port: ${PORT}`);
});

