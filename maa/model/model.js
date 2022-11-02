const mongoose = require("mongoose");
// mongodb+srv://viswa:<password>@cluster0.mtexpu9.mongodb.net/?retryWrites=true&w=majority

const ProductScema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number, min: 1, max: 500 },
});

const productModal = mongoose.model("product", ProductScema);

module.exports = productModal;
