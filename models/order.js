const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: {
        type: String,
        default: "pending",
        enum: ['pending', 'delivered']
    },
    payment_status: { 
        type: String, 
        required: true,
        enum: ['pending', 'success', 'failed']
      },
 },
 {timestamps: true}
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;