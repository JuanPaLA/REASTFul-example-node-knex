const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require('cors');

const itemRouter = require('./routes/itemsRoutes');
app.use('/items', itemRouter);

app.listen(8080, () =>
    console.log('Servidor escuchando en http://localhost:8080')
).on("error", (err) => {
    console.log("error", err);
});