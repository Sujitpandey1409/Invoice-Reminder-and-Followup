const express = require('express');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Invoice = mongoose.model('invoices');
const router = express.Router();

router.get('/api/invoices', requireLogin, async (req, res) => {
  const invoices = await Invoice.find({ userId: req.user.id, status: 'due' });
  res.send(invoices);
});

module.exports = router;
