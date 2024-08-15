import axios from 'axios';

export const fetchInvoices = () => {
  return axios.get('/api/invoices');
};

export const triggerZapier = (invoiceId) => {
  return axios.post('/api/zapier/trigger', { invoiceId });
};
