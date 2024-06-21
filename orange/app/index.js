const express = require("express");
const app = express();

app.use((err, req, res, next) => {
    next(err);
});

module.exports = { serverIndex: app };
