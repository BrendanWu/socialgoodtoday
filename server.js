const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const path = require('path');
require('dotenv').config()
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

//enable cors
app.use(cors());



// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payments', require('./routes/payments'))
app.use('/api/media', require('./routes/media'))
app.use('/api/charity', require('./routes/charity'))
app.use('/api/donations', require('./routes/donations'))
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
