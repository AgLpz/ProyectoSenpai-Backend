const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

app.get("/", (req, res) => {
    res.send('hola')
})
app.listen(PORT, function(){
    console.log(`Running at port ${PORT}`);
})