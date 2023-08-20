const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PostModel = require('./models/PostModel');
const LoginModel = require('./models/LoginModel');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://127.0.0.1:27017/indiefeverDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/post', async (req, res) => {
    try {
        const { title, subtitle, author, content, tags, date } = req.body;
        const imageData = req.body.imageData;
        const imageBuffer = Buffer.from(imageData, 'base64');

        const newPost = new PostModel({ title, subtitle, author, content, tags, date });
        await newPost.save();
        res.status(201).json({ message: 'Post sent' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }
});

app.get('/post', async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new LoginModel({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully. Please login.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }

})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await LoginModel.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid cretendials' });
        }
        res.status(200).json({ message: 'User authenticated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
})