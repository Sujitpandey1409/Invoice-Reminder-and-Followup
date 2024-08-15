import React, { useState, useEffect } from 'react';
import { fetchInvoices, triggerZapier } from '../services/api';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices().then((response) => {
      setInvoices(response.data);
    });
  }, []);

  const handleTriggerZapier = (invoiceId) => {
    triggerZapier(invoiceId).then(() => {
      alert('Zapier Triggered');
    }).catch(err => {
      console.error(err);
      alert('Failed to trigger Zapier');
    });
  };

  return (
    <div>
      <h1>Due Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            {invoice.recipient} - ${invoice.amount} - Due: {new Date(invoice.dueDate).toLocaleDateString()}
            <button onClick={() => handleTriggerZapier(invoice._id)}>Send Reminder</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoices;
