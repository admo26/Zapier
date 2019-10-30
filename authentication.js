module.exports = {
  test: {
    body: {},
    url: 'https://api.xero.com/connections',
    removeMissingValuesFrom: {},
    headers: { Authorization: 'Bearer {{bundle.authData.access_token}}' },
    params: {},
    method: 'GET'
  },
  oauth2Config: {
    authorizeUrl: {
      url: 'https://login.xero.com/identity/connect/authorize',
      params: {
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code',
        client_id: '{{process.env.CLIENT_ID}}'
      },
      method: 'GET'
    },
    refreshAccessToken: {
      body: {
        client_secret: '{{process.env.CLIENT_SECRET}}',
        grant_type: 'refresh_token',
        refresh_token: '{{bundle.authData.refresh_token}}',
        client_id: '{{process.env.CLIENT_ID}}'
      },
      url: 'https://identity.xero.com/connect/token',
      removeMissingValuesFrom: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      },
      params: {},
      method: 'POST'
    },
    getAccessToken: {
      body: {
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
        code: '{{bundle.inputData.code}}',
        client_id: '{{process.env.CLIENT_ID}}',
        grant_type: 'authorization_code'
      },
      url: 'https://identity.xero.com/connect/token',
      removeMissingValuesFrom: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      },
      params: {},
      method: 'POST'
    },
    autoRefresh: true,
    scope: 'accounting.transactions accounting.contacts offline_access'
  },
  type: 'oauth2'
};
