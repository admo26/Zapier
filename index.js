const authentication = require('./authentication');
const getTenantTrigger = require('./triggers/get_tenant.js');
const getQuotesTrigger = require('./triggers/get_quotes.js');
const getInvoicesTrigger = require('./triggers/get_invoices.js');
const createContactCreate = require('./creates/create_contact.js');
const emailInvoiceCreate = require('./creates/email_invoice.js');

module.exports = {
  platformVersion: require('zapier-platform-core').version,
  creates: {
    [createContactCreate.key]: createContactCreate,
    [emailInvoiceCreate.key]: emailInvoiceCreate
  },
  authentication: authentication,
  version: require('./package.json').version,
  triggers: {
    [getTenantTrigger.key]: getTenantTrigger,
    [getQuotesTrigger.key]: getQuotesTrigger,
    [getInvoicesTrigger.key]: getInvoicesTrigger
  }
};
