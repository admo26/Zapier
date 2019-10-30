const perform = (z, bundle) => {
  const options = {
    url: 'https://api.xero.com/api.xro/2.0/Invoices',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
      'xero-tenant-id': process.env.TENANT_ID
    },
    params: {}
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // Parsing
    return results.Invoices.map(function(invoice) {
      invoice.id = invoice.InvoiceID;
      delete invoice.InvoiceID;
      return invoice;
    });
  });
};

module.exports = {
  operation: {
    perform: perform,
    outputFields: [
      { key: 'HasAttachments' },
      { key: 'CurrencyRate' },
      { key: 'LineAmountTypes' },
      { key: 'Type' },
      { type: 'string', key: 'id', label: 'InvoiceId' },
      { type: 'string', key: 'Status', label: 'Status' },
      { key: 'UpdatedDateUTC' },
      { key: 'SubTotal' },
      { key: 'IsDiscounted' },
      { key: 'DateString' },
      { key: 'Date' },
      { key: 'AmountDue' },
      { key: 'DueDate' },
      { key: 'HasErrors' },
      { key: 'CurrencyCode' },
      { key: 'AmountCredited' },
      { key: 'Contact__Name' },
      { key: 'Contact__ContactID' },
      { key: 'Contact__HasValidationErrors' },
      { key: 'DueDateString' },
      { type: 'string', key: 'Total', label: 'Total' },
      { key: 'Reference' },
      { key: 'TotalTax' },
      { type: 'string', key: 'InvoiceNumber', label: 'Invoice Number' },
      { key: 'AmountPaid' }
    ],
    canPaginate: true,
    sample: {
      HasAttachments: true,
      CurrencyRate: 1,
      LineAmountTypes: 'Inclusive',
      Type: 'ACCPAY',
      id: '22b3fab4-ef56-4d70-a110-a7cc3c1a26cd',
      Status: 'VOIDED',
      UpdatedDateUTC: '/Date(1289566516347+0000)/',
      SubTotal: 77.39,
      IsDiscounted: false,
      DateString: '2018-12-08T00:00:00',
      Overpayments: [],
      Prepayments: [],
      Date: '/Date(1544227200000+0000)/',
      AmountDue: 0,
      DueDate: '/Date(1545091200000+0000)/',
      HasErrors: false,
      CreditNotes: [],
      CurrencyCode: 'NZD',
      AmountCredited: 0,
      Contact: {
        Name: 'PowerDirect',
        Phones: [],
        ContactGroups: [],
        ContactID: '9b9ba9e5-e907-4b4e-8210-54d82b0aa479',
        HasValidationErrors: false,
        ContactPersons: [],
        Addresses: []
      },
      Payments: [],
      DueDateString: '2018-12-18T00:00:00',
      LineItems: [],
      Total: 89,
      Reference: '',
      TotalTax: 11.61,
      InvoiceNumber: 'Elec.',
      AmountPaid: 0
    }
  },
  noun: 'Invoice',
  display: {
    hidden: false,
    important: true,
    description: 'Get all the invoices',
    label: 'GET Invoices'
  },
  key: 'get_invoices'
};
