const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    cover: {
        
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    catagory: {
      type: Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    bookType: {
      type: String,
      required: true,
      default: "pdf",
    },
    bookStatus: {
      type: String,
      required: true,
      default: "pending",
      enum: ["pending", "live"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;