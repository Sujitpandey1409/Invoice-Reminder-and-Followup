const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/zapier/trigger', async (req, res) => {
  const { invoiceId } = req.body;

  try {
    // Trigger Zapier webhook
    await axios.post('https://hooks.zapier.com/hooks/catch/your_zap_id/', {
      invoiceId,
    });
    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: 'Failed to trigger Zapier' });
  }
});

module.exports = router;
