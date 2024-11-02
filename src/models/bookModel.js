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
    coverImage: {
        type: String,
        required: true,
    },
    fileUpload: {
        type: String,
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
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;