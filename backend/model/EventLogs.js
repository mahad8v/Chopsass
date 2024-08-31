const eventLogSchema = new Schema({
  eventType: { type: String, required: true }, // e.g., 'ORDER_STATUS_CHANGE', 'TABLE_STATUS_CHANGE'
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  tableId: { type: Schema.Types.ObjectId, ref: "Table" },
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  userId: { type: Schema.Types.ObjectId, ref: "User" }, // staff or owner performing the action
  details: { type: String }, // Additional details
  createdAt: { type: Date, default: Date.now },
});
