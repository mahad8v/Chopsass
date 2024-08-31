const reportSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  date: { type: Date, required: true }, // Report date
  totalSales: { type: Number, default: 0 }, // Total sales for the day
  totalOrders: { type: Number, default: 0 }, // Total number of orders for the day
  itemsSold: [
    {
      itemId: { type: Schema.Types.ObjectId, ref: "MenuItem", required: true },
      quantitySold: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Report", reportSchema);
