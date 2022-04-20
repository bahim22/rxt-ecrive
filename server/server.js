const express = require("express");
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer')
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () =>
    console.log(`Server is running on port ${port}` || `http://localhost:5222`)
);

app.get("/backend", (req, res) => {
    res.send({
        express: `Connection est bein`,
    });
});
