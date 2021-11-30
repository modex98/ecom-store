const mongoose = require("mongoose");

let ratingSchema = new mongoose.Schema(
      {
            product: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "Product is required"],
                  ref: "Product",
            },

            user: {
                  type: mongoose.SchemaTypes.ObjectId,
                  required: [true, "User is required"],
                  ref: "User",
            },

            value: {
                  type: Number,
                  required: [true, "Rating value is required"],
                  max: 5,
                  min: 0,
            },
      },
      { timestamps: true }
);

ratingSchema.index({ product: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Rating", ratingSchema);
