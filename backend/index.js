const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const animalsRoutes = require('./routes/animalsRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/admin', adminRoutes);

app.use('/animals', animalsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

