const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const animalsRoutes = require('./routes/animalsRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(cors());

app.use('/animals', animalsRoutes);
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
