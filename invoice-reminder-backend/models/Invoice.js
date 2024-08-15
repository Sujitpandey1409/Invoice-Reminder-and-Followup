const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  userId: String,
  amount: Number,
  dueDate: Date,
  recipient: String,
  status: String, // e.g., 'due', 'paid'
});

mongoose.model('invoices', invoiceSchema);
