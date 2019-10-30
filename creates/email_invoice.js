const perform = (z, bundle) => {
  const options = {
    url: `https://api.xero.com/api.xro/2.0/Invoice/${
      bundle.inputData.InvoiceID
    }/Email`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
      'xero-tenant-id': process.env.TENANT_ID
    },
    params: {},
    body: {
      InvoiceID: bundle.inputData.InvoiceID
    }
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = { Result: 'Success' };

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        required: false,
        list: false,
        label: 'InvoiceID',
        key: 'InvoiceID',
        type: 'string',
        altersDynamicFields: false
      }
    ]
  },
  noun: 'Invoice',
  display: {
    hidden: false,
    important: true,
    description: 'Email and Invoice from Xero',
    label: 'Email Invoice'
  },
  key: 'email_invoice'
};
