import app from "./app.js";

app.get("/test", (req, res) => {
    res.status(200).json({"status": "dziala"});
})