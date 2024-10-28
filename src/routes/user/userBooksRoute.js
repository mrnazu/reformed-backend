const express = require("express");
const userBooksRoute = express.Router();

const books = [
    { id: 1, title: "The Sacraments Explained", tags: ["sacrament", "theology"], description: "A detailed look at sacraments.", link: "https://www.amazon.com/" },
    { id: 2, title: "Understanding Baptism", tags: ["baptism", "theology"], description: "An exploration of the meaning of baptism.", link: "https://www.amazon.com/" },
    { id: 3, title: "Predestination in Scripture", tags: ["predestination", "theology"], description: "A comprehensive study on predestination.", link: "https://www.amazon.com/" },
];

userBooksRoute.get("/", (req, res) => {
    const { tag } = req.query;

    const filteredBooks = tag ? books.filter(book => book.tags.includes(tag)) : books;

    res.status(200).json({
        message: "Books fetched successfully",
        data: filteredBooks,
    });
});

userBooksRoute.get("/search", (req, res) => {
    const { q } = req.query; // Search query

    if (!q) {
        return res.status(400).json({ message: "Search query is required" });
    }

    const searchResults = books.filter(book => book.title.toLowerCase().includes(q.toLowerCase()));

    res.status(200).json({
        message: "Search results fetched successfully",
        data: searchResults,
    });
});

userBooksRoute.get("/:title", (req, res) => {
    const bookTitle = req.params.title.replace(/-/g, " ");

    const book = books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());

    if (book) {
        res.status(200).json({
            message: `Details for book "${bookTitle}" fetched successfully`,
            data: book,
        });
    } else {
        res.status(404).json({
            message: `Book with title "${bookTitle}" not found`,
        });
    }
});

module.exports = userBooksRoute;