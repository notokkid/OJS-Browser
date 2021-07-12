const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const router = require('./common/const/router.const');

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

process.env.BASEURL = 'http://'

app.use('/api', router);

app.listen(PORT, HOST, () => {
  console.log("Server listening at http://localhost:4000/");
});
