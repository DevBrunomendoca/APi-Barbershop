/*const express = require("express")
const app = express()
const cors = require('cors');

require("dotenv").config()
require("./db")

const port = process.env.PORT || 3000

const pictureRouter = require("./routes/picture")

app.use(cors());
app.use("/pictures", pictureRouter)
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})*/

const express = require("express");
const app = express();
const cors = require('cors');

require("dotenv").config();
require("./db");

const port = process.env.PORT || 4000;

const pictureRouter = require("./routes/picture");

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
