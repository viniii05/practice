module.exports = (req, res, next) => {
    const isAuthenticated = true; // Add actual authentication logic
    if (!isAuthenticated) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};
