const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const sequelize = require('./src/util/database');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch((err) => console.log(err));
