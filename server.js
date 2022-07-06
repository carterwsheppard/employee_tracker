//Import needed node modules
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const index = require('./index');

//set PORT destination and app variable
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES SECTION: this runs the index.js file in ./routes/apiRoutes which pulls in everything I need
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//index.startApp();