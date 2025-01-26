const User = require('../models/User'); // Updated to use correct casing

exports.postSignup = (req, res, next) => {
    const { username, password } = req.body;
    User.create({ username, password })
        .then(result => {
            res.status(201).json({ message: 'User created successfully', user: result });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Failed to create user' });
        });
};

exports.postLogin = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ where: { username } })
        .then(user => {
            if (!user || user.password !== password) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            res.json({ message: 'Login successful', user });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Failed to login' });
        });
};

// Additional user-related functions can be added here (e.g., add to cart, place order)
