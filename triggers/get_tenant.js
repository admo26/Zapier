module.exports = {
  operation: {
    perform: {
      body: {},
      url: 'https://api.xero.com/connections',
      removeMissingValuesFrom: {},
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}'
      },
      params: {},
      method: 'GET'
    },
    sample: {
      tenantType: 'ORGANISATION',
      id: '009fb3e3-e58c-4255-8711-789ad0fe19bd',
      tenantId: '765ef250-5501-4b24-bb47-f7547e5800ba'
    },
    outputFields: [
      { type: 'string', key: 'tenantId', label: 'Organisation ID' }
    ]
  },
  noun: 'Organisation',
  display: {
    hidden: false,
    important: true,
    description: 'Get the organisation that has been authorised by the user',
    label: 'Get Tenant'
  },
  key: 'get_tenant'
};
