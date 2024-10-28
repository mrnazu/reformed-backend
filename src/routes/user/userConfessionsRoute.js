const express = require("express");
const userConfessionRoute = express.Router();

const confessions = [
    { name: "Westminster", description: "It affirms his incarnation, virgin birth, and dual nature as both God and man." },
    { name: "Belgic", description: "A confession to which many Reformed churches subscribe as a doctrinal standard." }
];

userConfessionRoute.get("/", (req, res) => {
    res.status(200).json({
        message: "All confessions fetched successfully",
        data: confessions,
    });
});

userConfessionRoute.get("/:name", (req, res) => {
    const confessionName = req.params.name;

    const confession = confessions.find(c => c.name.toLowerCase() === confessionName.toLowerCase());

    if (confession) {
        res.status(200).json({
            message: `confession with name "${confessionName}" fetched successfully`,
            data: confession,
        });
    } else {
        res.status(404).json({
            message: `confessions with name "${confessionName}" not found`,
        });
    }
});

module.exports = userConfessionRoute;