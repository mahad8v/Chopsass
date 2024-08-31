const orderSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [
    {
      itemId: { type: Schema.Types.ObjectId, ref: "MenuItem", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  tableId: { type: Schema.Types.ObjectId, ref: "Table", required: true },
  staffId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Staff handling the order
  totalPrice: { type: Number, required: true }, // Track total price of the order
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
