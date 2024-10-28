const express = require("express");
const userDevotionalsRouter = express.Router();

const isAdmin = (req, res, next) => {
    const userIsAdmin = true;
    if (userIsAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Access denied. Admins only." });
    }
};

userDevotionalsRouter.get("/", (req, res) => {
    res.status(200).json({ message: "All devotionals fetched successfully" });
});

userDevotionalsRouter.get("/:title", (req, res) => {
    const devotionalTitle = req.params.title;
    res.status(200).json({ message: `Devotional details for: ${devotionalTitle}` });
});

userDevotionalsRouter.post("/", isAdmin, (req, res) => {
    const newDevotional = req.body;
    res.status(201).json({ message: "Devotional added successfully", devotional: newDevotional });
});

userDevotionalsRouter.put("/:id", isAdmin, (req, res) => {
    const devotionalId = req.params.id;
    const updatedData = req.body;
    res.status(200).json({ message: `Devotional with id ${devotionalId} updated successfully`, updatedData });
});

userDevotionalsRouter.delete("/:id", isAdmin, (req, res) => {
    const devotionalId = req.params.id;
    res.status(200).json({ message: `Devotional with id ${devotionalId} deleted successfully` });
});

module.exports = userDevotionalsRouter;