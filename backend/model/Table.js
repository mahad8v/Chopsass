const tableSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  tableNumber: { type: Number, required: true },
  qrCode: { type: String }, // Store the QR code link if needed
  status: {
    type: String,
    enum: ["Available", "Occupied"],
    default: "Available",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Table", tableSchema);
