import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json("Welcome to Student API");
});

const port = 3931;
app.listen(port, (err) => {
    console.log(`Server is listening on port ${port}`);
});
