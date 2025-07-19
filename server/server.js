const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const __dirname1 = path.resolve();
  app.use(express.static(path.join(__dirname1, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname1, 'client', 'build', 'index.html'));
  });
} else {
  // Development route
  app.get('/', (req, res) => {
    res.send('Temple backend is running');
  });
}

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error', err));

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
