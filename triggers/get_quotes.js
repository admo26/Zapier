const perform = (z, bundle) => {
  const options = {
    url: 'https://api.xero.com/api.xro/2.0/Quotes',
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

    // You can do any parsing you need for results here before returning them

    return results.Quotes.map(function(quote) {
      quote.id = quote.QuoteID;
      delete quote.QuoteID;
      return quote;
    });
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      Title: 'Your Quote',
      CurrencyRate: 0.926901,
      LineAmountTypes: 'EXCLUSIVE',
      SubTotal: 17.96,
      id: 'be59294f-2a9c-4cee-8c64-0f0ddbc1883a',
      Status: 'SENT',
      LineItems: [
        {
          AccountCode: '200',
          TaxAmount: 2.69,
          Tracking: [
            {
              Option: 'Eastside',
              TrackingCategoryID: '351953c4-8127-4009-88c3-f9cd8c9cbe9f',
              Name: 'Region',
              TrackingOptionID: 'ce205173-7387-4651-9726-2cf4c5405ba2'
            },
            {
              Option: '1',
              TrackingCategoryID: '272520d0-c170-48de-bcd3-961989eb26eb',
              Name: 'Untitled 1',
              TrackingOptionID: '0096efdd-4006-4902-b915-66509a1a11dd'
            }
          ],
          Description: "'Fish out of Water: Finding Your Brand",
          UnitAmount: 19.95,
          TaxType: 'OUTPUT2',
          ItemCode: 'BOOK',
          LineItemID: 'ccf5e45c-73b6-4659-83e8-520f4c6126fd',
          DiscountRate: 10,
          LineAmount: 17.96,
          Quantity: 1
        }
      ],
      Terms: 'Not valid after the expiry date',
      UpdatedDateUTC: '/Date(1571879065850)/',
      DateString: '2019-10-24T00:00:00',
      Date: '/Date(1571875200000)/',
      QuoteNumber: 'QU-0001',
      CurrencyCode: 'AUD',
      ExpiryDate: '/Date(1571961600000)/',
      Contact: {
        ContactID: '060816db-0ed7-44de-ab58-8fee9316fcd5',
        Name: 'Adam'
      },
      BrandingThemeID: '4c82c365-35cb-467f-bb11-dce1f2f2f67c',
      Summary: 'Please buy this',
      Reference: 'REF-123',
      ExpiryDateString: '2019-10-25T00:00:00',
      TotalTax: 2.69,
      TotalDiscount: 1.99,
      Total: 20.65
    },
    canPaginate: true,
    outputFields: [
      { key: 'Title' },
      { key: 'CurrencyRate' },
      { key: 'LineAmountTypes' },
      { key: 'SubTotal' },
      { key: 'id' },
      { key: 'Status' },
      { key: 'LineItems[]AccountCode' },
      { key: 'LineItems[]TaxAmount' },
      { key: 'LineItems[]Tracking[]Option' },
      { key: 'LineItems[]Tracking[]TrackingCategoryID' },
      { key: 'LineItems[]Tracking[]Name' },
      { key: 'LineItems[]Tracking[]TrackingOptionID' },
      { key: 'LineItems[]Description' },
      { key: 'LineItems[]UnitAmount' },
      { key: 'LineItems[]TaxType' },
      { key: 'LineItems[]ItemCode' },
      { key: 'LineItems[]LineItemID' },
      { key: 'LineItems[]DiscountRate' },
      { key: 'LineItems[]LineAmount' },
      { key: 'LineItems[]Quantity' },
      { key: 'Terms' },
      { key: 'UpdatedDateUTC' },
      { key: 'DateString' },
      { key: 'Date' },
      { key: 'QuoteNumber' },
      { key: 'CurrencyCode' },
      { key: 'ExpiryDate' },
      { key: 'Contact__ContactID' },
      { key: 'Contact__Name' },
      { key: 'BrandingThemeID' },
      { key: 'Summary' },
      { key: 'Reference' },
      { key: 'ExpiryDateString' },
      { key: 'TotalTax' },
      { key: 'TotalDiscount' },
      { key: 'Total' }
    ]
  },
  noun: 'Quotes',
  display: {
    hidden: false,
    important: true,
    description: 'Retrieve new quotes from your Xero org',
    label: 'GET Quotes'
  },
  key: 'get_quotes'
};
