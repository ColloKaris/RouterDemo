// Require Express
const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

// listen on port 3000
app.listen(3000, () => {
    console.log("SERVER LISTENING ON PORT 3000")
})