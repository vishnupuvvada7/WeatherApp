const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.msp4xfa.mongodb.net/jackie');

// Endpoint to fetch user details for admin module
app.get('/admin/users', async (req, res) => {
    try {
        const users = await FormDataModel.find({}, 'email name'); // Fetch only email and name fields
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to register a new user
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await FormDataModel.findOne({ email });
        if (existingUser) {
            return res.json('Already registered');
        }
        const newUser = await FormDataModel.create({ email, password });
        res.json(newUser);
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await FormDataModel.findOne({ email });
        if (!user) {
            return res.json('No records found!');
        }
        if (user.password === password) {
            return res.json('Success');
        }
        res.json('Wrong password');
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://127.0.0.1:${PORT}`);
});
