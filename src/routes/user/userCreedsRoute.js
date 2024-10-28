const express = require("express");

const userCreedRoute = express.Router();

const creeds = [
    { name: "Apostles Creed", description: "A statement of Christian faith." },
    { name: "Nicene Creed", description: "A declaration of faith." }
];

userCreedRoute.get("/", (req, res) => {
    res.status(200).json({
        message: "All creeds fetched successfully",
        data: creeds,
    });
});

userCreedRoute.get("/:name", (req, res) => {
    const creedName = req.params.name;

    const creed = creeds.find(c => c.name.toLowerCase() === creedName.toLowerCase());

    if (creed) {
        res.status(200).json({
            message: `Creed with name "${creedName}" fetched successfully`,
            data: creed,
        });
    } else {
        res.status(404).json({
            message: `Creed with name "${creedName}" not found`,
        });
    }
});

module.exports = userCreedRoute;