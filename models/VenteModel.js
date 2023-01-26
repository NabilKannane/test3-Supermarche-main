const mongoose = require("mongoose");

//Schema de collection Vente 
const venteSchema = mongoose.Schema({
  InvoiceID: { type: String },
  Branch: { type: String },
  City: { type: String },
  CustomerType: { type: String },
  Gender: { type: String, enum: ["Male", "Female"] }, //gender doit etre soit "Male" , "Female"
  ProductLine: { type: String },
  UnitPrice: { type: Number, default: 0 },    // par default UnitPrice = 0
  Quantity: { type: Number },
  Tax: { type: Number },
  Total: { type: Number },
  date: { type: Date },
  time: { hour: Number, minute: Number },
  Payment: {
    type: String,
    enum: ["Cash", "Ewallet", "Credit card"],   //Payment doit etre soit en "Cash" , "Ewallet" , "Credit card" 
  },
  cogs: { type: Number },
  grossMarginPercentage: { type: Number },
  grossqIncome: { type: Number },
  Rating: { type: Number },
});

module.exports = mongoose.model("vente", venteSchema);
