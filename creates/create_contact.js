const perform = (z, bundle) => {
  const options = {
    url: 'https://api.xero.com/api.xro/2.0/Contacts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
      'xero-tenant-id': process.env.TENANT_ID
    },
    params: {},
    body: {
      Name: bundle.inputData.Name
    }
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        required: true,
        list: false,
        label: 'Name',
        key: 'Name',
        type: 'string',
        altersDynamicFields: false
      }
    ],
    sample: {
      Status: 'OK',
      DateTimeUTC: '/Date(1572389586147)/',
      Id: 'afed6f52-b801-471d-9998-63068f277890',
      ProviderName: 'Adam Zapier',
      Contacts: [
        {
          Addresses: [
            {
              PostalCode: '',
              City: '',
              Region: '',
              AddressType: 'STREET',
              Country: ''
            },
            {
              PostalCode: '',
              City: '',
              Region: '',
              AddressType: 'POBOX',
              Country: ''
            }
          ],
          BankAccountDetails: '',
          UpdatedDateUTC: '/Date(1572389476470+0000)/',
          Phones: [
            {
              PhoneAreaCode: '',
              PhoneNumber: '',
              PhoneType: 'DEFAULT',
              PhoneCountryCode: ''
            },
            {
              PhoneAreaCode: '',
              PhoneNumber: '',
              PhoneType: 'DDI',
              PhoneCountryCode: ''
            },
            {
              PhoneAreaCode: '',
              PhoneNumber: '',
              PhoneType: 'FAX',
              PhoneCountryCode: ''
            },
            {
              PhoneAreaCode: '',
              PhoneNumber: '',
              PhoneType: 'MOBILE',
              PhoneCountryCode: ''
            }
          ],
          IsSupplier: false,
          ContactGroups: [],
          ContactID: '3916cbeb-398f-4031-b155-ed5bb6ae3f39',
          HasValidationErrors: false,
          EmailAddress: '',
          ContactPersons: [],
          PurchasesTrackingCategories: [],
          SalesTrackingCategories: [],
          IsCustomer: false,
          ContactStatus: 'ACTIVE',
          Name: 'Doug'
        }
      ]
    },
    outputFields: [
      { key: 'Contacts[]Addresses[]PostalCode' },
      { key: 'Contacts[]Addresses[]City' },
      { key: 'Contacts[]Addresses[]Region' },
      { key: 'Contacts[]Addresses[]AddressType' },
      { key: 'Contacts[]Addresses[]Country' },
      { key: 'Contacts[]UpdatedDateUTC' },
      { key: 'Contacts[]Phones[]PhoneAreaCode' },
      { key: 'Contacts[]Phones[]PhoneNumber' },
      { key: 'Contacts[]Phones[]PhoneType' },
      { key: 'Contacts[]Phones[]PhoneCountryCode' },
      { key: 'Contacts[]IsSupplier' },
      { key: 'Contacts[]BankAccountDetails' },
      { key: 'Contacts[]ContactID' },
      { key: 'Contacts[]HasValidationErrors' },
      { key: 'Contacts[]EmailAddress' },
      { key: 'Contacts[]IsCustomer' },
      { key: 'Contacts[]ContactStatus' },
      { key: 'Contacts[]Name' }
    ]
  },
  noun: 'Contact',
  display: {
    hidden: false,
    important: true,
    description: 'Create a new contact in the org',
    label: 'Create Contact'
  },
  key: 'create_contact'
};
