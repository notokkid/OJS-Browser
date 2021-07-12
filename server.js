const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "3000";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  })
});

app.listen(PORT, HOST, () => {
  console.log("Server listening at http://localhost:3000/");
});
